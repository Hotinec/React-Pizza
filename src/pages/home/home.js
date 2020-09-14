import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock, Spinner } from '../../components'
import { setCategory, setSortBy } from '../../redux/actions/filters'
import { fetchPizzas } from '../../redux/actions/pizzas'

const categories = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"]
const sortItems = [
  {name: "popularity", type: 'popular', order: 'desc'}, 
  {name: "price", type: 'price', order: 'desc'}, 
  {name: "alphabet", type: 'name', order: 'asc'}
]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const pizzaItems = items.map(item => {
    return (
      <li 
        className="content__pizza-item"
        key={item.id}>
          <PizzaBlock {...item} isLoading={true} />
      </li>
    )
  })

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])

  const onClickSortType = useCallback((type) => {
    console.log('work!', type)
    dispatch(setSortBy(type))
  }, [dispatch])


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          onClickItem={onSelectCategory}
          activeItem={category}
        />
        <SortPopup 
          items={sortItems} 
          activeSortType={sortBy.type} 
          onClickSortType={onClickSortType} />
      </div>

      <div className="content__pizza">
        <h1 className="content__title">All pizzas</h1>
        {
          isLoaded ? <ul className="content__pizza-list">
            {pizzaItems}
          </ul>
          : <Spinner />
        }
      </div>
    </div>
  )
}

export default Home
