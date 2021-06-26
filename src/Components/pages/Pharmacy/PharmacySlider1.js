import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './PharmacySlider1.css'

SwiperCore.use([Navigation]);

function PharmacySlider1() {
    return (
        <div className="pharmacySlider1-wrapper">
            <Swiper navigation className="pharmacySlider1-container">
              <SwiperSlide>
                    <div className="pharmacySlide1">
                        <p>AVAILABLE EVERYWHERE</p>
                        <h4>Delivering in 100+ cities all over India</h4>
                        <h3>From Amritsar to Port Blair, we home deliver medicines & health<br/>
                            products all over India
                        </h3>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="pharmacySlide1">
                        <p>TRUSTED CARE</p>
                        <h4>Geniune medicines</h4>
                        <h3>All medicines $ health are sourced from trusted network <br/>
                        of verified pharmicies and medical stores</h3>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="pharmacySlide1">
                        <p>COMPREHENSIVE INFORMATION</p>
                        <h4>Know your medicine</h4>
                        <h3>Exhaustive information about medicines written by <br/>
                        verified medical experts</h3>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="pharmacySlide1">
                       <p>FAST HEALTHCARE</p>
                       <h4>Reliable on time home delivery</h4>
                       <h3>Our in-house pharmacists ensure medicines <br/> 
                        reach you when you need them</h3> 
                    </div>
              </SwiperSlide>
          </Swiper>
        </div>
    )
}

export default PharmacySlider1;
