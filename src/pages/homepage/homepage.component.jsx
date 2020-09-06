import React from 'react';
import './homepage.styles.scss'
import Hero from './../../components/hero/hero.component';
import News from './../../components/news/news.component';
import Catalog from './../../components/catalog/catalog.component';

const HomePage = () => (
  <>
    <h1 className="visually-hidden">Denim Clothing & Outfits</h1>
    <Hero />
    <Catalog />
    <News />
  </>
)

export default HomePage;
