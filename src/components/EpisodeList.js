import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
    const [episodes, setEpisodes] = useState([]);
  // TODO: Add useState to track data from useEffect

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const list = response.data.results;
                setEpisodes(list);
                // console.log('episodes', episodes);
                // console.log('response', response.data.results);
                
            })
        .catch(response => {
            console.log('it broke, please try again', response);
        })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, url)

  return (
            <section className='episode-list grid-view'>
                {
                    episodes.map(item => {
                        return <EpisodeCard key={item.id} character={item} />
                    })
                }
            </section>
        )
}