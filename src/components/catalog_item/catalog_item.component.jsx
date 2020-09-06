import React from 'react';
import './catalog_item.styles.scss';
const ImageDimensions = {
  'WIDTH': 270,
  'HEIGHT': 349
}

const CatalogItem = ({ title, image, id, linkUrl }) => (
  <li className='catalog__item'>
    <a className='catalog__item-link' href={linkUrl}>
      <h3 className='catalog__item-title'>{title}</h3>
      <img className='catalog__item-image' src={image} width={ImageDimensions.WIDTH} height={ImageDimensions.HEIGHT} alt={title} />
    </a>
  </li>
)

export default CatalogItem;

// <img src={news} width={ImageDimensions.WIDTH} height={ImageDimensions.HEIGHT} alt="Collection stretch denim items for spring 2020" />
// const ImageDimensions = {
//   'WIDTH': 700,
//   'HEIGHT': 462
// }
