import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './PharmacySlider2.css';

SwiperCore.use([Pagination]);

function PharmacySlider2() {
    
    return (
        <div>
          <Swiper pagination={{clickable:true}} className="pharmacySlider1-container">
              <SwiperSlide>
                    <div className="pharmacySlide2">
                       <h4>Slide 1</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="pharmacySlide2">
                       <h4>Slide 2</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="pharmacySlide2">
                       <h4>Slide 3</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="pharmacySlide1">
                       <h4>Slide 4</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
          </Swiper>  
        </div>
    )
}

export default PharmacySlider2;
