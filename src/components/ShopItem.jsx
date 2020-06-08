import React from 'react'
import PropTypes from 'prop-types'
import Product from '../models/Product'

function ShopItem({ item }) {
  return (
    <li className="item">
      <div className="item-row">
        <div className="item-img-container item-img-flip">
          <img
            src={item.img}
            alt={item.name + ', ' + item.color}
            className="item-img item-img-flip"
          />
        </div>
        <h3 className="item-name" id={`${item.id}-name`}>
          {item.name}
        </h3>
        <p className="item-color" id={`${item.id}-color`}>
          {item.color}
        </p>
        <p className="item-price">${item.price}</p>
        <button
          className="item-cta"
          id={`${item.id}-cta`}
          aria-labelledby={`${item.id}-cta ${item.id}-name ${item.id}-color`}>
          Add to Cart
        </button>
      </div>
    </li>
  )
}

ShopItem.propTypes = {
  item: PropTypes.instanceOf(Product).isRequired,
}

export default ShopItem
