import React from 'react';
import './description-card.css';

function DescriptionCard(props) {
  const { overview } = props;

  function cuttingString(str, maxLength = 35) {
    return `${str.split(' ').slice(0, maxLength).join(' ')}...`;
  }

  return <div className="card-movie__description">{cuttingString(overview)}</div>;
}

export default DescriptionCard;
