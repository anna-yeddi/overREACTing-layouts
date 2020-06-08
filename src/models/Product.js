export default class Product {
  constructor(product) {
    Object.assign(
      this,
      {
        name: 'Product',
        price: '999',
        color: 'Rainbow',
        img: '',
      },
      product
    )
  }
}
