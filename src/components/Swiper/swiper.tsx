import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './swiper.css';

import CHARLIE from '../../assets/charlie.jpg';
import ARCHI from '../../assets/slide1-2.jpg';
import BRNR from '../../assets/bladernr.jpg';
import STAR from '../../assets/star.jpg';

import PAVER from '../../assets/aver.jpg';
import PBABY from '../../assets/baby.jpg';
import BRNR2 from '../../assets/brnr2.jpg';
import JOKE from '../../assets/jok.jpg';


const imges = [CHARLIE, ARCHI, BRNR, STAR];
const imges2 = [PAVER, PBABY, BRNR2, JOKE];

export default () => {
  const renderSlides = (coll) => {
    return coll.map((el, index) => {
      return (
        <div key={index} className="swiper-slide">
          <img className='slide-bg large' src={el} alt={`img${index}`} />
        </div>
      );
    })
  }

  return (
    <>
      <div className='main-page'>
        <Swiper>
          {renderSlides(imges)}
        </Swiper>
        <img className='poster-s secondary1' src={PAVER} alt='avengers' />
        <img className='poster-s secondary2' src={PBABY} alt='baby' />
        <img className='poster-s secondary3' src={BRNR2} alt='bladerunner' />
        <img className='poster-s secondary4' src={JOKE} alt='joker' />
      </div>
      <div className="content">
        <div className="slide-inner">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic debitis sit exercitationem rem nulla at! Nulla expedita pariatur sed natus dolores inventore error temporibus amet, hic fugiat iure cum ducimus.</p>
        </div>
      </div>
    </>
  );
}