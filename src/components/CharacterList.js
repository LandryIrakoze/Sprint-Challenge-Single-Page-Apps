import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get(url)
      .then(response => {
        const list = response.data.results;
        setCharacters(list);
        // console.log('characters', characters);
        // console.log('response', response.data.results);
        
      })
      .catch(response => {
        console.log('it broke, please try again', response);
      })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, url)

  return (
            <section className='character-list grid-view'>
              {
                characters.map(item => {
                  return <CharacterCard key={item.id} character={item} />
                })
              }
            </section>
        )
}
