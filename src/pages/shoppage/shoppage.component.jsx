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
      <section className='shoppage'>
          <h1 className='visually-hidden'>All categories</h1>
          <ul>
            {
              collections.map(({ id, ...otherGoodsProps }) => (
                <Goods key={id} {...otherGoodsProps} />
              ))
            }
          </ul>
      </section>
    )
  }
}

export default ShopPage;
