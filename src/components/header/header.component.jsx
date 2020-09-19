import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from './img/Nîmes.svg';
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
  return (
    <header className='main-header'>
      <nav className='main-header__nav'>
        <div className='wrapper'>
          <div className="main-header__nav-wrapper">
            <ul className='site-navigation'>
              <li className='site-navigation__item'>
                <BrowserRouter>
                  <Link className='link-item' to='/shop'>Shop</Link>
                </BrowserRouter>
              </li>
              <li className='site-navigation__item'>
                <BrowserRouter>
                  <Link className='link-item' to='/'>Contacts</Link>
                </BrowserRouter>
              </li>
              <li className='site-navigation__item'>
                <BrowserRouter>
                  <Link className='link-item' to='/'>News</Link>
                </BrowserRouter>
              </li>
            </ul>
            <BrowserRouter>
              <Link className='main-header__logo' to='/'>
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
              <li className='user-navigation__item'>
              {
                currentUser ?
                  <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                  :
                  <BrowserRouter>
                    <Link className='option' to='/signin'>Sign In</Link>
                  </BrowserRouter>
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
