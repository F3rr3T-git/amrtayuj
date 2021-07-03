import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './ConsultancySlider2.css'

SwiperCore.use([Navigation]);

function ConsultancySlider2() {
    return (
        <div>
           <Swiper navigation slidesPerView={2} spaceBetween={40} className="consultancySlider2-container">
              <SwiperSlide>
                    <div className="consultancySlide2 bgcl1">
                        <button>OFFER</button>
                        <h2>Download the app and get</h2>
                        <h2>₹200 Healthcash</h2>
                        <h4>Download App</h4>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="consultancySlide2 bgcl2">
                        <button>AMRTA-YUJ PLUS</button>
                        <h2>Free online consultation</h2>
                        <h2>starting at ₹799/month</h2>
                        <h4>Get membership</h4>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="consultancySlide2 bgcl3">
                        <button>OFFER</button>
                        <h2>Consult with specialist at</h2>
                        <h2>just ₹199</h2>
                        <h4>Consult Now</h4>
                    </div>
              </SwiperSlide>
          </Swiper>  
 
        </div>
    )
}

export default ConsultancySlider2;
