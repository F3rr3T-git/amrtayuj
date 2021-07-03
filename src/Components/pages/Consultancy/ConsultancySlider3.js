import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './ConsultancySlider3.css';

SwiperCore.use([Navigation]);


function ConsultancySlider3() {
    return (
        <div>
            <Swiper navigation slidesPerView={5} spaceBetween={20} className="consultancySlider3-container">
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic1.jpg" alt="docimg" />
                        <h2>Test 1</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic2.jpg" alt="docimg" />
                        <h2>Test 2</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic1.jpg" alt="docimg" />
                        <h2>Test 3</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic2.jpg" alt="docimg" />
                        <h2>Test 4</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic1.jpg" alt="docimg" />
                        <h2>Test 5</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic2.jpg" alt="docimg" />
                        <h2>Test 6</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic1.jpg" alt="docimg" />
                        <h2>Test 7</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic2.jpg" alt="docimg" />
                        <h2>Test 8</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="consultancySlide3">
                    <img className="consultancy-img" src="/images/testpic1.jpg" alt="docimg" />
                        <h2>Test 9</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ConsultancySlider3;
