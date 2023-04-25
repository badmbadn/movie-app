import React from 'react';

import MovieService from '../movie-service/movie-service';

const Poster = ({ poster }) => {
  const movieService = new MovieService();
  return (
    <>
      <img src={movieService.defaultPoster(poster)} className="card-movie__img" alt="icon" />
    </>
  );
};

export default Poster;
