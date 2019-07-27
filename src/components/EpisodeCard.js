import React from 'react'

export default function EpisodeCard ({ episode }) {
  console.log('props', episode);

  return (
    <div className="ui card">
      <div className="content">
        <a className="header">{episode.name}</a>
        <div className="description">{episode.episode}</div>
        <div className="description">{episode.air_date}</div>
      </div>
    </div>
  )
}

//add extracharacters link