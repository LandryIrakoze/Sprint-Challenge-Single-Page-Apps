import React from 'react'

export default function LocationCard ({ name, type, dimension, residents, image }) {
  // image={image}
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{type}</p>
      <p>{dimension}</p>
      <p>{residents}</p>
    </div>
  )
}
