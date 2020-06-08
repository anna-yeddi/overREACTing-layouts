import React from 'react'
import PropTypes from 'prop-types'
import Product from '../models/Product'

function ShopCard({ card }) {
  return (
    <>
      <li className="card">
        <div>
          <h3 className="card-name" id={`${card.id}-name`}>
            {card.name}
          </h3>
          <p className="card-color" id={`${card.id}-name`}>
            {card.color}
          </p>
          <div className="card-img-container card-img-flip">
            <img
              src={card.img}
              alt={card.name + ', ' + card.color}
              className="card-img card-img-flip"
            />
          </div>
          <p className="card-price">${card.price}</p>
          <button
            className="card-cta"
            id={`${card.id}-cta`}
            aria-labelledby={`${card.id}-cta ${card.id}-name ${card.id}-color`}>
            Add to Cart
          </button>
        </div>
      </li>
    </>
  )
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(Product).isRequired,
}

export default ShopCard
