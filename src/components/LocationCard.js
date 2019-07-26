import React from 'react'

//({ name, type, dimension, residents, image }) old props
export default function LocationCard (props) {
  // console.log('props', props.location);
  const details = props.location;
  console.log('details', details);

  return (
    <div>
      <p>{details.name}</p>
      {/* <img src={image} alt={name} /> */}
      <p>{details.type}</p>
      <p>{details.dimension}</p>
      {/* <p>{residents}</p> */}
    </div>
  )
}
