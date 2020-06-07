import React, { useState } from 'react'
import data from '../data/products.json'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'
import { nanoid } from 'nanoid'

export default function Store() {
  // fetch JSON data and assign ids size 10
  const products = data.map((product) => ({ ...product, id: nanoid(10) }))

  const icon = [
    { view: 'view_list', isActive: false },
    { view: 'view_module', isActive: true },
  ]

  const [view, setView] = useState(icon[0])
  const handleSwitch = (e) => {
    setView((prevView) => prevView.filter((o) => o.icon === icon[1]))
    console.log('change state here')
  }

  console.log(icon)

  return (
    <>
      <div>I'm working!</div>
      <IconSwitch icon={icon} onSwitch={handleSwitch} />
      <CardsView cards={products} />
      <ListView items={products} />
    </>
  )
}
