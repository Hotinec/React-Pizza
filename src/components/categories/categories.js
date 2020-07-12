import React, { useState } from "react";

const Categories = ({ items, onClickItem }) => {

  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (indx) => {
    setActiveItem(indx)
  }

  const categoriesItems = items && items.map((item, indx) => {
    const active = activeItem === indx ? 'active' : ''

    return <li 
      className={`categories__item ${active}`}
      key={`${item}_${indx}`}
      onClick={() => onSelectItem(indx)}
    >{item}</li>
  })

  return (
    <div className="categories">
      <ul className="categories__list">
        <li 
          onClick={() => onSelectItem(null)}
          className={`categories__item 
            ${activeItem === null ? 'active' : ''}`}
         >All</li>
        {categoriesItems}
      </ul>
    </div>
  );
};

export default Categories;
