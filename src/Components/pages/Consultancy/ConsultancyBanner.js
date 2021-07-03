import React from 'react';
import './ConsultancyBanner.css';

function ConsultancyBanner() {
    return (
        <div className="consultancyBanner-container">
        <div className="consultancyBanner-wrapper">
            <h1>Skip the travel! <br/>
            Take Online Doctor Consultation
            </h1>

            <h4>Private consultation + Audio call · Starts at just ₹199</h4>

            <button>Consult Now</button>

            <p>Verified Doctors Digital Prescription Free Followup</p>
        </div>
        <img className="consultancyBanner-img" src="/images/consultancybannerpic.png" alt="consultancyBanner-img" />
        </div>
    )
}

export default ConsultancyBanner;
