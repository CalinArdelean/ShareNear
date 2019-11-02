import React from 'react';
// import './Forms.css';
import logo from '../logo.svg';

/* Component to Login */

class SignUpForm extends React.Component {
    render() {
        return (
            <div className="Form">
                <br></br>
                <br></br>
            <a href="./">
              <img
              alt=""
              src={logo}
              width="175px"
              height="100px"
              className="d-inline-block align-top"/>
            </a>
                <h3>Welcome to ShareNear</h3>
                <h6>Let's get you set up</h6>
                <br></br>
                <p>Please input your information in the fields below:</p>
                <div className="input">
                <input firstname='firstname'
                    type="text"
                    placeholder="First Name" />
                </div>
                <div className="input">
                <input lastname='lastname'
                    type="text"
                    placeholder="Last Name" />
                </div>
                <br></br>
                <div className="input">
                <input phonenumber='phonenumber'
                    type="text"
                    placeholder="Phone Number" />
                </div>
                <div className="input">
                <input email='email'
                    type="text"
                    placeholder="Email Address" />
                </div>
                <br></br>
                <div className="input">
                <input location='location'
                    type="text"
                    placeholder="Location" />
                </div>
                <div className="input">
                <input username='username'
                    type="text"
                    placeholder="Username" />   
                </div>             
                <br></br>
                <div className="input">              
                <input password='password'
                    type="text"
                    placeholder="Password" />
                </div>
                <div className="input">
                <input password='password'
                    type="text"
                    placeholder="Confirm Password" />
                </div>
                <br />
                <br />
                <a href="./">
                    <button type="button">Sign Up</button>
                </a>
                <br></br>
                <br></br>
                <a href="./login">Already have an account? Login Here</a>
            </div>

        );
    }
}

export default SignUpForm;