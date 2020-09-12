import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from './img/Nîmes.svg';

const Header = () => {
  return (
    <header className='main-header'>
      <nav class='main-header__nav'>
        <div className='wrapper'>
          <div class="main-header-nav-wrapper">
            <ul className='site-navigation'>
              <li className='site-navigation__item'>
                <BrowserRouter>
                  <Link className='link-item' to='/shop'>Shop</Link>
                </BrowserRouter>
              </li>
              <li className='site-navigation__item'>
                <BrowserRouter>
                  <Link className='link-item' to='/contacts'>Contacts</Link>
                </BrowserRouter>
              </li>
              <li className='site-navigation__item'>
                <BrowserRouter>
                  <Link className='link-item' to='/news'>News</Link>
                </BrowserRouter>
              </li>
            </ul>
            <BrowserRouter>
              <Link className='main-header__logo'>
                <Logo width='75' height='20' alt='Logo' />
              </Link>
            </BrowserRouter>
            <ul className='user-navigation'>
              <li className='user-navigation__item'>
                <div className='link-item'>Cart</div>
              </li>
              <li className='user-navigation__item'>
                <div className='link-item'>Search</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
