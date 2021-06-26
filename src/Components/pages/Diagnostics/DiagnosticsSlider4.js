import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './DiagnosticsSlider4.css'

SwiperCore.use([Pagination]);


function DiagnosticsSlider4() {
    return (
        <div>
           <Swiper pagination={{clickable:true}} className="diagnosticsSlider4-container">
              <SwiperSlide>
                    <div className="diagnosticsSlide4">
                       <h4>Slide 1</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="diagnosticsSlide4">
                       <h4>Slide 2</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="diagnosticsSlide4">
                       <h4>Slide 3</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="diagnosticsSlide4">
                       <h4>Slide 4</h4>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                       Lorem Ipsum has been the industry's standard </p> 
                    </div>
              </SwiperSlide>
          </Swiper>  
 
        </div>
    )
}

export default DiagnosticsSlider4
