import React from 'react';
import './hero.styles.scss';
import hero from './img/hero.jpg';
const newUrl = 'new-collection';
const ImageDimensions = {
  'WIDTH': 430,
  'HEIGHT': 517
};

const Hero = () => (
  <section className="promo">
    <div className="wrapper">
      <div className="promo__wrapper">
        <div className="promo__text-column">
          <h2 className="promo__title">The quality you deserve</h2>
          <p className="promo__text">Denim</p>
          <a className="promo__button" href={newUrl}>Check new collection</a>
        </div>
        <div className="promo__img-column">
        <img src={hero} width={ImageDimensions.WIDTH} height={ImageDimensions.HEIGHT} alt="New collection" />
        </div>
      </div>
    </div>
  </section>
)

export default Hero;
