import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map( (card) => {
            return <Card 
            headline={card.headline}
            image={card.img}
            author={card.author}
            />
          })}
    </div>
  )
}

//PropTypes
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;