import React from 'react';
import Banner from '../../UI/Banner';
import DiagnosticsSlider1 from '../Diagnostics/DiagnosticsSlider1';
import DiagnosticsInfoDisplay1 from '../Diagnostics/DiagnosticsInfoDisplay1';
import DiagnosticsSlider2 from '../Diagnostics/DiagnosticsSlider2';
import DiagnosticsSlider3 from '../Diagnostics/DiagnosticsSlider3';
import DiagnosticsInfoDisplay2 from '../Diagnostics/DiagnosticsInfoDisplay2';
import DiagnosticsSlider4 from '../Diagnostics/DiagnosticsSlider4';

function Diagnostics() {
    return (
        <div>
            <Banner/>
            <DiagnosticsSlider1/>
            <DiagnosticsInfoDisplay1/>
            <DiagnosticsSlider2/>
            <DiagnosticsSlider3/>
            <DiagnosticsInfoDisplay2/>
            <DiagnosticsSlider4/>

        </div>
    )
}

export default Diagnostics
