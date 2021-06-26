import React from 'react';
import './TwoBlocks.css';

function TwoBlocks() {
    return (
        <div className="twoblocks-container">
            <div className="block-container1">
                <p className="blockTitle1">INTRODUCING CONSULTATION DESK</p>
                <p className="blockTitle2">Don’t self medicate. Talk to an expert.Consult a <br/>
                 doctor in less than 2 minutes.</p>
                <div className="blockCard">
                    <p>Chat with a</p>
                    <h3>DOCTOR</h3>
                    <button><i className="fas fa-angle-double-right"/></button>
                </div>
            </div>
            <div className="block-container2">
                <p className="blockTitle1">INTRODUCING FAST DELIVERY</p>
                <p className="blockTitle2">Tired of waiting in a queue? Too weak to go down <br/> 
                and buy medicines?</p>
                <div className="blockCard">
                    <p>Home delivery in</p>
                    <h3>2 HOURS</h3>
                    <button><i className="fas fa-angle-double-right"/></button>
                </div>
            </div>
        </div>
    )
}

export default TwoBlocks;
