import shortid from 'shortid'

class ShopItem {
  constructor(item) {
    Object.assign(
      this,
      {
        id: shortid.generate(),
        name: 'Item',
        price: '999',
        color: 'rainbow',
        img: '',
      },
      item
    )
  }
}

export default ShopItem
