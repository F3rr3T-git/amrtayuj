import React from 'react';
import './ConsultancyInfoDisplay2.css'

function ConsultancyInfoDisplay2() {
    return (
        <div className="consultancyInfoDisplay2-container">
            <h1>How does it work?</h1>
            <div className="consultancyInfoDisplay2-wrapper">
                <div>
                    <i class="far fa-hand-pointer"/>
                    <p>Select a speciality or symptom</p>
                </div>
                <div>
                    <i class="far fa-comments"/>
                    <p>Audio/ video call with a verified doctor</p>
                </div>
                <div>
                    <i class="fas fa-notes-medical"/>
                    <p>Get a digital prescription & a free follow-up</p>
                </div>
            </div>
        </div>
    )
}

export default ConsultancyInfoDisplay2;
