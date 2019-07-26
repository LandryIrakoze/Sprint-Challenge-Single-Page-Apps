import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/location/');
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const list = response.data.results;
                setLocations(list);
                console.log('response', response);
                console.log('response', response.data.results)
            })
            .catch(response => {
                console.log('its broken, please try again', response)
            })
    }, url)

    return (
        <section className='location-list grid-view'>
        {
            locations.map(item => {
                return <LocationCard key={item.id} location={item} />
            })
        }
        </section>
    )

}
