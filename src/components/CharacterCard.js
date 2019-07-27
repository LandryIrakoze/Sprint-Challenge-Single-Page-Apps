import React from 'react'

export default function CharacterCard ({ character }) {
  console.log('details', { character });

  return (
    <div className="ui card">
      <div className="image">
        <img src={character.image} alt={'character'}/>
      </div>
      <div className="content">
        <a className="header">{character.name}</a>
        <div className="meta">{character.species} {character.status}</div>
        <div className="description">Location: {character.location.name}</div>
        <div className="description">Origin: {character.origin.name}</div>
      </div>
      
    </div>
  )
}

//add extraepisodes link