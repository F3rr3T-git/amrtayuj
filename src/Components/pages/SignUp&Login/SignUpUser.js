import React from 'react';
import {Link} from 'react-router-dom';
import './SignUpUser.css';

function SignUpUser() {
    return (
        <div className="signUp-container">
            <div className="signUp-subcontainer1">
                <img src="/images/hosp.jpg" alt="hosp-img"/>
            </div>
            <div className="signUp-subcontainer2">
                <form>

                    <div className="signUp-subcontainer2-title">
                        <h2>User|Doctor</h2>
                    </div>

                    <div className="signUp-subcontainer2-forminpts">
                    <label for="name">Name</label>
                    <input type="text" />
                    </div>

                    <div className="signUp-subcontainer2-forminpts">
                    <label for="telno">Mobile Number</label>
                    <input type="tel" />
                    </div>

                    <div className="signUp-subcontainer2-forminpts">
                    <label for="email">Email-Id</label>
                    <input type="email" />
                    </div>

                    <div className="signUp-subcontainer2-forminpts">
                    <label for="pass">Password</label>
                    <input type="password" />
                    </div>

                    <div className="signUp-subcontainer2-forminpts">
                    <label for="cnpass">Confirm Password</label>
                    <input type="password" />
                    </div>

                    <div className="signUp-subcontainer2-formbtn">
                    <button>Sign Up</button>
                    </div>

                    <div className="signUp-subcontainer2-extras">
                        <p>Already have an account? <Link to='/login'>Login Here</Link></p>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default SignUpUser;
