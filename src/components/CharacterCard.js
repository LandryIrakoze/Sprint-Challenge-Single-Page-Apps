import React from 'react'

export default function CharacterCard (props) {
  console.log('props', props.character);
  const details = props.character;
  console.log('details', details);

  return (
    <div>
      {/* <img */}
      <p>{details.name}</p>
      <img src={details.image} alt={'character'}/>

    </div>
  )
}
