import React from 'react';
import {NavLink} from 'react-router-dom';
import Card1 from './Card.css';


function Card(props){
  return(
    <> 
      <div className='card'>
        <div className='card__body'>
          <img src={props.img} className='card__image' />
          <h2 className='card__title'>{props.title}</h2>
        </div>
        <button className='card__btn'>View More</button>
      </div>   
    </>
  );
}

export default Card;