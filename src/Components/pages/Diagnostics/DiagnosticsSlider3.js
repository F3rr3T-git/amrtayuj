import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './DiagnosticsSlider3.css';

SwiperCore.use([Navigation]);

function DiagnosticsSlider3() {
    return (
      <div className="diagnosticsSlider3-container">
      <Swiper navigation slidesPerView={3} spaceBetween={40}>
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic3.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3>
        </div>
        </SwiperSlide>        
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic4.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic3.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic4.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic3.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic4.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic3.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3> 
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="diagnosticsSlide3">
        <img className="diagnosticsSlide3-img" src="/images/testpic4.jpg" alt="bla"/>  
        <h3>Health Checkup Test Package</h3> 
        </div>
        </SwiperSlide>

      </Swiper>
      </div>
    )
}

export default DiagnosticsSlider3;
