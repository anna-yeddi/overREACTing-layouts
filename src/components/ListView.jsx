import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from '../models/ShopItem'

function ListView(props) {
  const items = props.items.data

  console.log('Items:')
  console.log(items)

  return (
    <>
      <div>Many ShopItems will be here</div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            Item {item.name} with i {i}
          </li>
        ))}
      </ul>
      {/* <ShopItem /> */}
    </>
  )
}

ListView.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
}

export default ListView
