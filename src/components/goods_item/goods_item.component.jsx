import React from 'react';
import './goods_item.styles.scss';
const ImageDimensions = {
  'WIDTH': 270,
  'HEIGHT': 349
}

const GoodsItem = ({ id, name, price, imageUrl }) => {
  return (
    <li className='goods__item'>
      <img className='goods__item-image' src={imageUrl} width={ImageDimensions.WIDTH} height={ImageDimensions.HEIGHT} alt={name} />
      <div className='goods__item-footer'>
        <span className='goods__item-footer-name'>{name}</span>
        <span className='goods__item-footer-price'>${price}</span>
      </div>
    </li>
  )
}

export default GoodsItem;
