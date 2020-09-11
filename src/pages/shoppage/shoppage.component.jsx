import React from 'react';
import SHOP_DATA from './shoppage.data.js';
import './shoppage.styles.scss';
import Goods from '../../components/goods/goods.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <div className='wrapper'>
          {
            collections.map(({ id, ...otherGoodsProps }) => (
              <Goods key={id} {...otherGoodsProps} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default ShopPage;
