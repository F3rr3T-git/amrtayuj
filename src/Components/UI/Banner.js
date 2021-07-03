import React from 'react';
import './Banner.css';

function Banner() {
    return (
            <div className="banner-container">
                <div className="banner-wrapper">
                <p className="banner-mainText">Get lab tests and full body <br/>
                checkups from the comfort <br/>
                of your home.</p>
                <p className="banner-subText">Upto 45% OFF + Get 10% Health Cashback* T&C</p>
                <button className="banner-btn">See all packages</button>
                </div>
                <img className="banner-img" src="/images/bannerpic.png" alt="banner-img" />

           </div>
    )
}

export default Banner
