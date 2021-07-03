import React from 'react';
import ConsultancyBanner from '../Consultancy/ConsultancyBanner';
import ConsultancySlider1 from '../Consultancy/ConsultancySlider1';
import ConsultancyInfoDisplay1 from '../Consultancy/ConsultancyInfoDisplay1';
import ConsultancySlider2 from '../Consultancy/ConsultancySlider2';
import ConsultancySlider3 from '../Consultancy/ConsultancySlider3';
import ConsultancyFAQ from '../Consultancy/ConsultancyFAQ';
import ConsultancyInfoDisplay2 from '../Consultancy/ConsultancyInfoDisplay2';
import ConsultancySlider4 from '../Consultancy/ConsultancySlider4';
function Consultancy() {
    return (
        <div>
           <ConsultancyBanner/> 
           <ConsultancySlider1/>
           <ConsultancyInfoDisplay1/>
           <ConsultancySlider2/>
           <ConsultancySlider3/>
           <ConsultancyFAQ/>
           <ConsultancyInfoDisplay2/>
           <ConsultancySlider4/>
        </div>
    )
}

export default Consultancy;
