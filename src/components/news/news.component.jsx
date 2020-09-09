import React from 'react';
import './news.styles.scss';
import news from './img/news.jpg';

const newsUrl = 'news';
const ImageDimensions = {
  'WIDTH': 700,
  'HEIGHT': 462
};
//  datetime="2020-02-12 11:00"

const News = () => (
  <section className="news">
    <div className="wrapper">
      <header className="news__header">
        <h2 className="news__title">News</h2>
        <a className="news__show-more" href={newsUrl}>View all</a>
      </header>
      <div className="news__wrapper">
        <div className="news__text-column">
          <h2 className="news__text-title">G- Star Updates Its Sustainable Collection</h2>
          <time className="news__time">Feb 12, 2020</time>
          <p className="news__text">G-Star Raw is pushing the sustainability movement forward with a collection of stretch denim items for spring 2020 which is particularly designed for reuse...</p>
          <a className="news__button" href={newsUrl}>Read more …</a>
        </div>
        <div className="news__img-column">
          <img src={news} width={ImageDimensions.WIDTH} height={ImageDimensions.HEIGHT} alt="Collection stretch denim items for spring 2020" />
        </div>
      </div>
    </div>
  </section>
)

export default News;
