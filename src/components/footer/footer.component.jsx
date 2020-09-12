import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './footer.styles.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Twitter } from './img/twitter.svg';
import { ReactComponent as Facebook } from './img/facebook.svg';
import { ReactComponent as Instagram } from './img/instagram.svg';
import { ReactComponent as Pinterest } from './img/pinterest.svg';


const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='container'>
        <div className='main-footer-wrapper'>
          <BrowserRouter>
            <Link className='main-footer-logo' to='/'>
              <Logo width='75' height='20' alt='Logo' />
            </Link>
          </BrowserRouter>
          <ul className='footer-navigation'>
            <li className='footer-navigation-item'>
              <BrowserRouter>
                <Link className='footer-navigation-link' to='/shop'>Shop</Link>
              </BrowserRouter>
            </li>
            <li className='footer-navigation-item'>
              <BrowserRouter>
                <Link className='footer-navigation-link' to='/delivery'>Delivery</Link>
              </BrowserRouter>
            </li>
            <li className='footer-navigation-item'>
              <BrowserRouter>
                <Link className='footer-navigation-link' to='/services'>Service</Link>
              </BrowserRouter>
            </li>
            <li className='footer-navigation-item'>
              <BrowserRouter>
                <Link className='footer-navigation-link' to='/sitemap'>Sitemap</Link>
              </BrowserRouter>
            </li>
            <li className='footer-navigation-item'>
              <BrowserRouter>
                <Link className='footer-navigation-link' to='/contacts'>Contacts</Link>
              </BrowserRouter>
            </li>
          </ul>
          <ul className='social'>
            <li className='social-item'>
              <BrowserRouter>
                <Link to='/'>
                  <Facebook width='12' height='20' alt='Facebook' />
                </Link>
              </BrowserRouter>
            </li>
            <li className='social-item'>
              <BrowserRouter>
                <Link to='/'>
                  <Instagram width='20' height='20' alt='Instagram' />
                </Link>
              </BrowserRouter>
            </li>
            <li className='social-item'>
              <BrowserRouter>
                <Link to='/'>
                  <Pinterest width='21' height='21' alt='Pinterest' />
                </Link>
              </BrowserRouter>
            </li>
            <li className='social-item'>
              <BrowserRouter>
                <Link to='/'>
                  <Twitter width='22' height='18' alt='Twitter' /></Link>
              </BrowserRouter>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
