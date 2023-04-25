import React from 'react';

import './MovieItem.css';
import DescriptionCard from '../description-card/description-card';
import TitleCard from '../title-card/title-card';
import Poster from '../poster/poster';

function MovieItem(props) {
  const { title, overview, poster_path, release_date } = props.item;
  return (
    <article className="card-movie">
      <div className="card-movie__left">
        <Poster poster={poster_path} />
      </div>
      <div className="card-movie__right">
        <TitleCard title={title} releaseDate={release_date} />
        <div className="card-movie__genres">
          <span>action</span>
          <span>drama</span>
        </div>
        <DescriptionCard overview={overview} />
      </div>
    </article>
  );
}

export default MovieItem;
