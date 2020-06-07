import React from 'react'
import PropTypes from 'prop-types'
import './CardsView.css'
// import ShopCard from './ShopCard'

function CardsView(products) {
  const cards = products.cards

  console.log('Cards:')
  console.log(cards)

  return (
    <>
      <h2>Cards are here!</h2>

      <ul className="cards-container">
        {cards.map((card, i) => (
          // <ShopCard />
          <li key={i} className="card">
            <div>
              <h3 className="card-name">{card.name}</h3>
              <p className="card-color">{card.color}</p>
              <img
                src={card.img}
                alt={card.name + ', ' + card.color}
                className="card-img"
              />
              <p className="card-price">${card.price}</p>
              <button className="card-cta">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string,
    })
  ).isRequired,
}

export default CardsView
