import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from '../models/ShopItem'

function CardsView(products) {
  const cards = products.cards.data

  console.log('Cards:')
  console.log(cards)

  return (
    <>
      <p>Cards are here!</p>
      <ul>
        {cards.map((card, i) => (
          <li key={i}>
            item {card.name} with i {i}
          </li>
          // <ShopItem />
        ))}
      </ul>
    </>
  )
}

CardsView.propTypes = {
  cards: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
}

export default CardsView
