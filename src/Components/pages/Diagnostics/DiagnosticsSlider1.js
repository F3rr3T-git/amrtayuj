import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './DiagnosticsSlider1.css';

SwiperCore.use([Navigation]);



function DiagnosticsSlider1() {
    return (
        <div>
            <Swiper navigation slidesPerView={5} spaceBetween={20} className="diagnosticsSlider1-container">
                <SwiperSlide >
                    <div className="diagnosticsSlide1">
                        <h5>Test1</h5>
                        <p>Test1 specification<br/>More specs</p>
                        <h2>₹625</h2>
                        <h4>ADD</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div className="diagnosticsSlide1">
                        <h5>Test2</h5>
                        <p>Test2 specification<br/>More specs</p>
                        <h2>₹525</h2>
                        <h4>ADD</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div className="diagnosticsSlide1">
                        <h5>Test3</h5>
                        <p>Test3 specification<br/>More specs</p>
                        <h2>₹650</h2>
                        <h4>ADD</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div className="diagnosticsSlide1">
                        <h5>Test4</h5>
                        <p>Test4 specification<br/>More specs</p>
                        <h2>₹500</h2>
                        <h4>ADD</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div className="diagnosticsSlide1">
                        <h5>Test5</h5>
                        <p>Test6 specification<br/>More specs</p>
                        <h2>₹700</h2>
                        <h4>ADD</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div className="diagnosticsSlide1">
                        <h5>Test6</h5>
                        <p>Test6 specification<br/>More specs</p>
                        <h2>₹555</h2>
                        <h4>ADD</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                <div className="diagnosticsSlide1">
                        <h5>Test7</h5>
                        <p>Test7 specification<br/>More specs</p>
                        <h2>₹600</h2>
                        <h4>ADD</h4>
                    </div>

                </SwiperSlide>
                <SwiperSlide >
                <div className="diagnosticsSlide1">
                        <h5>Test8</h5>
                        <p>Test8 specification<br/>More specs</p>
                        <h2>₹575</h2>
                        <h4>ADD</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DiagnosticsSlider1;
