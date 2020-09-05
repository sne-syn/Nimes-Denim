import React from 'react';
import './homepage.styles.scss'

const HomePage = () => (
  <section className='catalog'>
    <div className='wrapper'>
      <header className='catalog__header'>
        <h2 className='catalog__title'>Shop by category</h2>
      </header>
      <ul className='catalog__list'>
        <li className='catalog__item'>
          <a className='catalog__item-link' href='#'>
            <h3 className='catalog__item-title'>Jeans</h3>
          </a>
        </li>
        <li className='catalog__item'>
          <a className='catalog__item-link' href='#'>
            <h3 className='catalog__item-title'>Shirts</h3>
          </a>
        </li>
        <li className='catalog__item'>
          <a className='catalog__item-link' href='#'>
            <h3 className='catalog__item-title'>Jacket</h3>
          </a>
        </li>
        <li className='catalog__item'>
          <a className='catalog__item-link' href='#'>
            <h3 className='catalog__item-title'>Overalls</h3>
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default HomePage;
