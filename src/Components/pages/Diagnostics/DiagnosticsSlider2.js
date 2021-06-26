import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './DiagnosticsSlider2.css';

SwiperCore.use([Navigation]);


function DiagnosticsSlider3() {
    return (
        <div>
            <Swiper navigation slidesPerView={5} spaceBetween={20} className="diagnosticsSlider2-container">
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 1</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 2</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 3</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 4</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 5</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 6</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 7</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 8</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="diagnosticsSlide2">
                        <h2>Test 9</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DiagnosticsSlider3;
