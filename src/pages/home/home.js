import React from 'react'

import { Categories, SortPopup, PizzaBlock } from '../../components'

const Home = ({ items }) => {

  const pizzaItems = items.map(item => {
    return (
      <li 
        className="content__pizza-item"
        key={item.id}>
        <PizzaBlock {...item} />
      </li>
    )
  })

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Meat", "Vegetarian", "Grill", "Spicy", "Closed"]}
          onClickItem={(category) => console.log(category)}
        />
        <SortPopup items={["popularity", "price", "alphabet"]} />
      </div>

      <div className="content__pizza">
        <h1 className="content__title">All pizzas</h1>
        <ul className="content__pizza-list">
          {pizzaItems}
        </ul>
      </div>
    </div>
  )
}

export default Home
