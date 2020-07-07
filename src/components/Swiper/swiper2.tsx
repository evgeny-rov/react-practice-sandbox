import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './swiper.css';
import bgCheck from '../../utils/background-check';

import CHARLIE from '../../assets/charlie.jpg';
import ARCHI from '../../assets/slide1-2.jpg';
import BRNR from '../../assets/bladernr.jpg';
import STAR from '../../assets/star.jpg';

import PAVER from '../../assets/aver.jpg';
import PBABY from '../../assets/baby.jpg';
import PBRNR2 from '../../assets/brnr2.jpg';
import PJOKE from '../../assets/jok.jpg';


const imges = [BRNR, CHARLIE, ARCHI, STAR];
const imges2 = [PAVER, PBABY, PBRNR2, PJOKE];

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

  const params = {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    }
  }

  return (
    <>
      <header className='header'>
        <div className="brand">
          <span>Charlie</span>
        </div>
      </header>
      <div className='main-page'>
        <Swiper {...params}>
          {renderSlides(imges)}
        </Swiper>
      </div>
      <div className="content">
        <div className="slide-inner">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic debitis sit exercitationem rem nulla at! Nulla expedita pariatur sed natus dolores inventore error temporibus amet, hic fugiat iure cum ducimus.</p>
        </div>
      </div>
    </>
  );
}