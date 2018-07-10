import React from 'react';

const Photo = ({photo}) =>
  <div className="tile" key={photo.id} >
    <h5>{photo.caption}</h5>
    <p>{photo.created_at}</p>
  </div>

  export default Photo
