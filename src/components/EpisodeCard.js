import React from 'react'

export default function EpisodeCard ({ episode }) {
  console.log('props', episode);
//   const details = props;
//   console.log('details', details);

  return (
    <div>
    <p>{episode.episode}</p>
    <p>{episode.name}</p>
    <p>{episode.airdate}</p>
    <p>{episode.url}</p> {/*Add link here /*}
      {/* <img */}
      {/* <p>{details.name}</p>
      <img src={details.image} alt={'character'}/> */}

    </div>
  )
}