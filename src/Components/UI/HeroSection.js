import React from 'react';
import './HeroSection.css';

function HeroSection() {
    
    return(

        <div className='hero-container'>
            <img className="hero-img" src="/images/Hero.jpg" alt="hero-img" />
            <h1>FUTURE OF HEALTHCARE</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <button className='btnstyle'>
                    GET STARTED
                </button>
            </div>
        </div>
    )
}

export default HeroSection
