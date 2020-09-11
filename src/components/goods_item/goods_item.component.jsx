import React from 'react';

import './goods_item.styles.scss';

const GoodsItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='goods__item'>
      <div 
        className='goods__item-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='goods__item-footer'>
        <span className='goods__item-footer-name'>{name}</span>
        <span className='goods__item-footer-price'>{price}</span>
      </div>
    </div>
  )
}

export default GoodsItem;
