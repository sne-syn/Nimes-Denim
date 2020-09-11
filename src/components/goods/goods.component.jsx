import React from 'react';
import './goods.styles.scss';
import GoodsItem from './../goods_item/goods_item.component';

const Goods = ({ title, items }) => {
  return (
    <div className='goods'>
      <h1 className='goods__title'>{title.toUpperCase()}</h1>
      <div className='preview__item'>
        {
          items.filter((item, idx) => idx < 4).map(({ id, ...itemProps }) => {
            return (
              <GoodsItem key={id} {...itemProps} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Goods;
