import React from 'react'
import DoctorsSearch from '../Doctors/DoctorsSearch';
import DoctorsInfoDisplay1 from '../Doctors/DoctorsInfoDisplay1';
import DoctorsInfoDisplay2 from '../Doctors/DoctorsInfoDisplay2';

function Doctors() {
    return (
        <div>
            <DoctorsSearch/>
            <DoctorsInfoDisplay1/>
            <DoctorsInfoDisplay2/>
        </div>
    )
}

export default Doctors;
