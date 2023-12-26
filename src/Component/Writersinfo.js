import React from 'react'
import './css/writer.css';

export default function Writersinfo(props) {
  return (
    <div className='writer'>
      <div className='card-container'>
        <img className='product--image' 
        src={props.url}
         alt='Writers image'/>
         <h2 style={{color: "black"}}>{props.name}</h2>
         <p style={{color: "black"}}>{props.description}</p>
        <p><button>View more</button></p>
    </div>
    </div>
    
  )
}
