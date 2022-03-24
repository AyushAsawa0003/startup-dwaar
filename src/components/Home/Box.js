import React from 'react';
import './box.css';

const Box = (props) => {

  return (
    <div className='box'>
        <img className='box_img' src={`http://localhost:8000${props.founder.logo}`} alt="" />
        <p className="text-secondary mb-0 mt-3">{props.founder.name}</p>
    </div>
  )
}

export default Box;