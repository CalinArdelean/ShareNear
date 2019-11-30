import React from 'react';
// import './Forms.css';
import logo from '../logo.svg';
import TextField from "@material-ui/core/TextField";
import { updateLoginForm } from './LoginPage';

/* Component to sign up */
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
				<TextField
                        name="firstname"
                        label="firstname"
                        type="firstname"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
                <input firstname='firstname'
                    type="text"
                    placeholder="First Name" />
                </div>
                <div className="input">
				<TextField
                        name="lastname"
                        label="lastname"
                        type="lastname"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
                <input lastname='lastname'
                    type="text"
                    placeholder="Last Name" />
                </div>
                <br></br>
                <div className="input">
				<TextField
                        name="phonenumber"
                        label="phonenumber"
                        type="phonenumber"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
                <input phonenumber='phonenumber'
                    type="text"
                    placeholder="Phone Number" />
                </div>
                <div className="input">
				<TextField
                        name="email"
                        label="email"
                        type="email"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
                <input email='email'
                    type="text"
                    placeholder="Email Address" />
                </div>
                <br></br>
                <div className="input">
				<TextField
                        name="location"
                        label="Location"
                        type="Location"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
                <input location='location'
                    type="text"
                    placeholder="Location" />
                </div>
                <div className="input">
				<TextField
                        name="username"
                        label="username"
                        type="username"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
                <input username='username'
                    type="text"
                    placeholder="Username" />   
                </div>             
                <br></br>
                <div className="input">            
				<TextField
                        name="password"
                        label="password"
                        type="password"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
                <input password='password'
                    type="text"
                    placeholder="Password" />
                </div>
                <div className="input">
				<TextField
                        name="password"
                        label="password"
                        type="password"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
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