import React from 'react';
import './DiagnosticsInfoDisplay1.css';

function DiagnosticsInfoDisplay1() {
    return (
        <div className="diagnosticsInfoDisplay1-container">
            <h1>Why book with us?</h1>
            <div className="diagnosticsInfoDisplay1-content">
                <div className="diagnosticsInfoDisplay1-subcontent">
                    <div>
                    <i class="fas fa-clinic-medical fs"></i><p><b>Home sample collection for FREE</b><br/>
                    A certified professional will collect your sample from your preferred location</p>
                    </div>
                    <div>
                    <i class="fas fa-user-nurse fs"></i><p><b>Valuable doctor's consultation</b><br/>
                    Get your online reports and review them with one of our doctors absolutely free.</p>
                    </div>
                </div>
                <div className="diagnosticsInfoDisplay1-subcontent">
                    <div>
                    <i class="fas fa-notes-medical fs"></i><p><b>Get digital report within a day</b><br/>
                    Our labs ensure turn-around-time of 24 hours from specimen pickup</p>
                    </div>
                    <div>
                    <i class="fas fa-percent"></i><p><b>Offers and affordable prices</b><br/>
                    You can also avail great discounts and offers on tests and packages.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiagnosticsInfoDisplay1;
