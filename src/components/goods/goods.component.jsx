import React from 'react';
import './goods.styles.scss';
import GoodsItem from './../goods_item/goods_item.component';

const Goods = ({ title, items }) => {
  return (
    <li className='goods'>
      <div className='wrapper'>
        <header className='goods__header'>
          <h2 className='goods__title'>{title}</h2>
          <span className="goods__show-more">View all</span>
        </header>
        <ul className='goods__list'>
          {
            items.filter((item, idx) => idx < 4).map(({ id, ...itemProps }) => {
              return (
                <GoodsItem key={id} {...itemProps} />
              )
            })
          }
        </ul>
      </div>
    </li>
  )
}

export default Goods;
