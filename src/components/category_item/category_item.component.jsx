import React from 'react';
import './category_item.styles.scss';
const ImageDimensions = {
  'WIDTH': 270,
  'HEIGHT': 349
}

const CategoryItem = ({ title, image, id, linkUrl }) => (
  <li className='category__item'>
    <a className='category__item-link' href={linkUrl}>
      <h3 className='category__item-title'>{title}</h3>
      <img className='category__item-image' src={image} width={ImageDimensions.WIDTH} height={ImageDimensions.HEIGHT} alt={title} />
    </a>
  </li>
)

export default CategoryItem;

