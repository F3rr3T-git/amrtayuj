import React from 'react';
import ConsultancyBanner from '../Consultancy/ConsultancyBanner';
import ConsultancySlider1 from '../Consultancy/ConsultancySlider1';
import ConsultancyInfo from '../Consultancy/ConsultancyInfo';
import ConsultancySlider2 from '../Consultancy/ConsultancySlider2';

function Consultancy() {
    return (
        <div>
           <ConsultancyBanner/> 
           <ConsultancySlider1/>
           <ConsultancyInfo/>
           <ConsultancySlider2/>
        </div>
    )
}

export default Consultancy;
