import { Hono } from 'hono';
import axios from 'axios';

export const spotifyRoutes = new Hono();

spotifyRoutes.get('/login', (c) => {
    const scope = 'playlist-read-private playlist-read-collaborative';
  
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  
    if (!clientId || !redirectUri) {
      console.error('Missing SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI in environment variables.');
      return c.text('Configuration error: Missing Spotify Client ID or Redirect URI', 500);
    }
  
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
      scope
    )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  
    return c.redirect(authUrl);
  });
  

  spotifyRoutes.get('/callback', async (c) => {
    const code = c.req.query('code');
    const clientId = process.env.SPOTIFY_CLIENT_ID!;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI!;
    const tokenUrl = 'https://accounts.spotify.com/api/token';
  
    try {
      const response = await axios.post(
        tokenUrl,
        new URLSearchParams({
          grant_type: 'authorization_code',
          code: code!,
          redirect_uri: redirectUri,
          client_id: clientId,
          client_secret: clientSecret,
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );
  
      const { access_token } = response.data;
  
      // Redirect back to the frontend with the access token
      return c.redirect(`http://localhost:5173/?access_token=${access_token}`);
    } catch (error) {
      console.error('Error fetching tokens:', error);
      return c.json({ error: 'Failed to fetch tokens' }, 500);
    }
  });

spotifyRoutes.get('/playlists', async (c) => {
  const token = c.req.header('Authorization');

  if (!token) {
    return c.json({ error: 'Authorization header is required' }, 401);
  }

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return c.json(response.data);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return c.json({ error: 'Failed to fetch playlists' }, 500);
  }
});
