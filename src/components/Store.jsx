import React, { useState } from 'react'
import data from '../data/products.json'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'

export default function Store() {
  const products = { data }
  const icon = ['view_list', 'view_module']

  const [view, setView] = useState(icon[0])
  const handleSwitch = (e) => {
    setView((prevView) => prevView.filter((o) => o.icon === icon[1]))
    console.log('change state here')
  }

  console.log(products)

  return (
    <>
      <div>I'm working!</div>
      <IconSwitch icon={view} onSwitch={handleSwitch} />
      <CardsView cards={products} />
      <ListView items={products} />
    </>
  )
}
