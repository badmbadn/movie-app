import React from 'react';
import { format } from 'date-fns';
// {format(new Date(releaseDate), 'PPPppp')}
function TitleCard({ title, releaseDate }) {
  const rel = releaseDate ? releaseDate : null;
  return (
    <>
      <h5 className="card-movie__title">{title}</h5>
      <div className="card-movie__date">{format(new Date(rel), 'PPP')}</div>
    </>
  );
}

export default TitleCard;
