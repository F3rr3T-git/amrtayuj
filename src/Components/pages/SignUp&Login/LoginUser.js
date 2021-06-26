import React from 'react';
import {Link} from 'react-router-dom';
import './LoginUser.css';

function LoginUser() {
    return (
        <div className="login-container">
            <div className="login-subcontainer1">
                <img src="/images/hosp.jpg" alt="hosp-img"/>
            </div>
            <div className="login-subcontainer2">
                <form>

                    <div className="login-subcontainer2-title">
                        <h2>User|Doctor</h2>
                    </div>

                    <div className="login-subcontainer2-forminpts">
                    <label for="email">Email-Id</label>
                    <input type="email" />
                    </div>

                    <div className="login-subcontainer2-forminpts">
                    <label for="pass">Password</label>
                    <input type="password" />
                    </div>

                    <div className="login-subcontainer2-formbtn">
                    <button>Login</button>
                    </div>

                    <div className="login-subcontainer2-extras">
                        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default LoginUser;
