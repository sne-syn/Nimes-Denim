import React from 'react';
import './catalog.styles.scss';
import CatalogItem from './../catalog_item/catalog_item.component';
import jackets from './jackets.jpg';
import jeans from './jeans.jpg';
import shirts from './shirts.jpg';
import overalls from './overalls.jpg';

class Catalog extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'jeans',
          image: jeans,
          id: 1,
          linkUrl: 'shop/jeans'
        },
        {
          title: 'shirts',
          image: shirts,
          id: 2,
          linkUrl: 'shop/shirts'
        },
        {
          title: 'jackets',
          image: jackets,
          id: 3,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'overalls',
          image: overalls,
          size: 'large',
          id: 4,
          linkUrl: 'shop/overalls'
        }
      ]
    }
  }

  render() {
    return (
      <section className='catalog'>
        <div className='wrapper'>
          <header className='catalog__header'>
            <h2 className='catalog__title'>Shop by category</h2>
            <a className="catalog__show-more" href="catalog.html">View all</a>
          </header>
          <ul className='catalog__list'>
            {this.state.sections.map(({ title, image, id, linkUrl }) => (
              <CatalogItem key={id} title={title} image={image} link={linkUrl} />
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

export default Catalog;
