import React from 'react'
import PropTypes from 'prop-types'
import './ListView.css'
// import ShopItem from './ShopItem'

function ListView(props) {
  const items = props.items

  console.log('Items:')
  console.log(items)

  return (
    <>
      <div>Many ShopItems will be here</div>
      <ul className="items-container">
        {items.map((item, i) => (
          // <ShopItem />
          <li key={i} className="item">
            <div className="item-row">
              <img
                src={item.img}
                alt={item.name + ', ' + item.color}
                className="item-img"
              />
              <h3 className="item-name">{item.name}</h3>
              <p className="item-color">{item.color}</p>
              <p className="item-price">${item.price}</p>
              <button className="item-cta">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string,
    })
  ).isRequired,
}

export default ListView
