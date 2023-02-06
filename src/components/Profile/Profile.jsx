import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);
  const favoriteMovies = [];
  console.log(user);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <Box>

      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>Logout &nbsp; <ExitToApp /> </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography>
          Add Favorites or watchlist some movies to see them here!
        </Typography>
      )
        : <Box>Fav Movies</Box>}
    </Box>
  );
};

export default Profile;
