import React from 'react'
import PropTypes from 'prop-types'
import './ListView.css'
import ShopItem from './ShopItem'
import Product from '../models/Product'

function ListView(products) {
  const items = products.items.map((o) => new Product({ ...o }))

  return (
    <>
      <ul className="items-container">
        {items.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  )
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default ListView
