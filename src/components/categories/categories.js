import React, { memo } from "react"
import PropTypes from 'prop-types'

const Categories = memo(({ activeItem, items, onClickItem }) => {

  const categoriesItems = items && items.map((item, indx) => {
    const active = activeItem === indx ? 'active' : ''

    return <li 
      className={`categories__item ${active}`}
      key={`${item}_${indx}`}
      onClick={() => onClickItem(indx)}
    >{item}</li>
  })

  return (
    <div className="categories">
      <ul className="categories__list">
        <li 
          onClick={() => onClickItem(null)}
          className={`categories__item 
            ${activeItem === null ? 'active' : ''}`}
         >All</li>
        {categoriesItems}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  // activeItem: PropTypes.oneOf([PropTypes.number, null]), 
  items: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onClickItem: PropTypes.func
}

Categories.defaultProps = {
  activeItem: null, 
  items: [] 
}

export default Categories
