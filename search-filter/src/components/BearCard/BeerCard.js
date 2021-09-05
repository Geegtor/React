import React from 'react';
import './BeerCard.css';

function BeerCard(props) {
  return (
    <div id={props.item.id} className='card'>
      <div className='img-part'>
        <img className='imgBeer' src={props.item.image_url} alt='beer_image' />
      </div>
      <div className='text-part'>
        <h2>{props.item.name} </h2>
        <article>
          <ul>
            <li>Alcohol by Volume: {props.item.abv}%</li>
            <li>Attenuation: {props.item.attenuation_level}</li>
            <li>Boil value: {props.item.boil_volume.value}
              {props.item.boil_volume.unit}</li>
            <li>Brewers tips: {props.item.brewers_tips}</li>
            <li>Description: {props.item.description}</li>
          </ul>
        </article>
        <h3>First brewed: {props.item.first_brewed}</h3>
      </div>
    </div>
  );
}

export default BeerCard;
