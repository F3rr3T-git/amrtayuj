import React from 'react';
import './DoctorsSearch.css'

function DoctorsSearch() {
    return (
        <div className="doctorsSearch-container">
            <h1>Your home for health</h1>

            <h2>Find and Book</h2>

            <div>
            <input type="text" placeholder="Region" />
            <input type="text" placeholder="Search for doctors" />
            </div>

            <ul className="doctorSearch-extra1">
                <li>Top searches:</li>
                <li>Dermatologist</li>
                <li>Pediatrician</li>
                <li>Gynecologist</li>
                <li>Dentist</li>
            </ul>

            <ul className="doctorSearch-extra2">
                    <li><i class="fas fa-comments"/>Consult Doctor</li>
                    <li><i class="fas fa-cart-plus"/>Order Medicines</li>
                    <li><i class="fas fa-file-medical"/>Medical Records</li>
                    <li><i class="fas fa-vial"/>Book Test</li>
                    <li><i class="far fa-newspaper"/>Read Articles</li>
            </ul>
        </div>
    )
}

export default DoctorsSearch;
