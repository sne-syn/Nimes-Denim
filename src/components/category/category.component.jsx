import React from 'react';
import './category.styles.scss';
import CategoryItem from './../category_item/category_item.component';
import jackets from './img/jackets.jpg';
import jeans from './img/jeans.jpg';
import shirts from './img/shirts.jpg';
import overalls from './img/overalls.jpg';

class Category extends React.Component {
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
      <section className='category'>
        <div className='wrapper'>
          <header className='category__header'>
            <h2 className='category__title'>Shop by category</h2>
            <a className="category__show-more" href="category.html">View all</a>
          </header>
          <ul className='category__list'>
            {this.state.sections.map(({ title, image, id, linkUrl }) => (
              <CategoryItem key={id} title={title} image={image} link={linkUrl} />
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

export default Category;
