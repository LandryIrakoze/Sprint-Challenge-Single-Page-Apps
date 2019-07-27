import React from 'react'

//({ name, type, dimension, residents, image }) old props
export default function LocationCard ({ location }) {
  console.log('details', { location });

  return (
    <div className="ui card">
      <div className="content">
        <a className="header">{location.type}</a>
        <div className="description">{location.dimension}</div>
      </div>
    </div>
  )
}

//name
//detail
//link with number of residesnts