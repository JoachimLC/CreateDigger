import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyLogin = () => {
  const [accessToken, setAccessToken] = useState('');
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Check for access token in URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('access_token');

    if (token) {
      setAccessToken(token);
      window.localStorage.setItem('spotify_access_token', token); // Store the token
      params.delete('access_token'); // Remove token from URL
      window.history.replaceState({}, document.title, '/'); // Clean up URL
    }
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/api/spotify/login';
  };

  const fetchPlaylists = async () => {
    const token = accessToken || window.localStorage.getItem('spotify_access_token');
    if (!token) {
      alert('You need to log in first!');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3000/api/spotify/playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlaylists(response.data.items || []);
    } catch (error) {
      console.error('Error fetching playlists:', error.response?.data || error.message);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Spotify Playlist Fetcher</h1>
      {!accessToken && (
        <button onClick={handleLogin} style={{ marginBottom: '20px' }}>
          Log in with Spotify
        </button>
      )}
      {accessToken && (
        <div>
          <button onClick={fetchPlaylists} style={{ marginBottom: '20px' }}>
            Fetch Playlists
          </button>
          {playlists.length > 0 && (
            <ul>
              {playlists.map((playlist) => (
                <li key={playlist.id}>
                  {playlist.name} ({playlist.tracks.total} tracks)
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SpotifyLogin;
