import React from 'react';
import './DiagnosticsInfoDisplay2.css';

function DiagnosticsInfoDisplay2() {
    return (
        <div className="diagnosticsInfoDisplay2-container">
            <h1>How does it work ?</h1>
            <div className="diagnosticsInfoDisplay2-content">
                <div>
                <div><i class="fas fa-flask" /></div>
                    <p>Search for tests and packages and</p> 
                    <p>seamlessly book a home sample</p>
                    <p>collection.</p>
                </div>
                <div>
                    <div><i class="fas fa-user-md"/></div>
                    <p>We will send a certified professional to</p>
                     <p>your place to assist you with the</p> 
                     <p>sample collection</p>
                </div>
                <div>
                    <div><i class="fas fa-file-medical"/></div>
                    <p>We will email you the reports. You can</p>
                    <p>also access your reports within your</p> 
                    <p>account on the Practo app</p>
                </div>
            </div>
        </div>
    )
}

export default DiagnosticsInfoDisplay2;
