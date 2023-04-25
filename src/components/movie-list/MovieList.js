import React from 'react';

import './MovieList.css';
import MovieItem from '../movie-item/MovieItem';

function MovieList({ dataMovie }) {
  const movieList = dataMovie.map((item) => (
    <li key={item.id}>
      <MovieItem item={item} />
    </li>
  ));

  return <ul className="movie-list">{movieList}</ul>;
}

export default MovieList;
