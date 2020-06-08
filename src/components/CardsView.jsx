import React from 'react'
import PropTypes from 'prop-types'
import './CardsView.css'
import ShopCard from './ShopCard'
import Product from '../models/Product'

function CardsView(products) {
  const cards = products.cards.map((o) => new Product({ ...o }))

  return (
    <>
      <ul className="cards-container">
        {cards.map((card) => (
          <ShopCard card={card} key={card.id} />
        ))}
      </ul>
    </>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default CardsView
