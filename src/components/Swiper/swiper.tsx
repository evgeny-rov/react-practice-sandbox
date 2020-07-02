import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './swiper.css';

import CHARLIE from '../../assets/charlie.jpg';
import ARCHI from '../../assets/slide1-2.jpg';
import BRNR from '../../assets/bladernr.jpg';
import STAR from '../../assets/star.jpg';

const imges = [CHARLIE, ARCHI, BRNR, STAR];


export default () => {
  const renderSlides = () => {
    return imges.map((el, index) => {
      return (
        <div key={index} className="swiper-slide">
          <img className='slide-bg' src={el} alt={`img${index}`} />
          <div className="slide-inner">
            <input type="button" className='btn' value="Tickets"/>
          </div>
        </div>
      );
    })
  }

  return (
    <>
      <Swiper>
        {renderSlides()}
      </Swiper>
      <div className="content">
        <div className="slide-inner">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic debitis sit exercitationem rem nulla at! Nulla expedita pariatur sed natus dolores inventore error temporibus amet, hic fugiat iure cum ducimus.</p>
        </div>
      </div>
    </>
  );
}