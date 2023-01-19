import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movieinformation, Movies, NavBar, Profile } from './index';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<Movieinformation />} />
          <Route path="actors/:id" element={<Actors />} />
          <Route path="movies" element={<Movies />} />
          <Route path="profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
