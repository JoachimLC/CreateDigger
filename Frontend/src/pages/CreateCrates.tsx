import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SpotifyLogin from '../components/SpotifyLogin';
import { useAuth } from '../contexts/AuthContext'; // Import AuthContext to check authentication status

const CreateCrates = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/register?redirected=true'); // Redirect to register page
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Show a loading spinner or message
  }

  return (
    <div className="create-crates">
      <Navbar variant="slim" />
      <div className="content">
        <h1>Create Your Digital Crate</h1>
        <p>
          Start building your personalized vinyl-ready music collection. Choose a playlist, generate a crate, and enjoy!
        </p>
      </div>
      <SpotifyLogin />
    </div>
  );
};

export default CreateCrates;
