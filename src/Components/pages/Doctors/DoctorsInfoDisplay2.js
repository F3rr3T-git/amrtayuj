import React from 'react';
import './DoctorsInfoDisplay2.css'

function DoctorsInfoDisplay2() {
    return (
        <div className="doctorsInfoDisplay2-container">
        <img className="banner-img" src="/images/consultancybannerpic.png" alt="banner-img" />
        <div className="doctorsInfoDisplay2-wrapper">
            
            <h1>Skip the waiting room.<br/>
            <b>Consult with a doctor now</b></h1>

            <div>
                <p>Fees starting at ₹99</p>
                <p>Verified doctors respond in 5 minutes</p>
                <p>100% Private and confidential</p>
            </div>

            <button>Consult Now</button>
        </div>
        </div>
    )
}

export default DoctorsInfoDisplay2;

