import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
import Home from './Home'

import { updateLoginForm } from './LoginPage';
import TextField from "@material-ui/core/TextField";
import { getState, setState } from "statezero";
import BaseReactComponent from './BaseReactComponent';

/* Component to Login */

class LoginForm extends BaseReactComponent {

  filterState({ currentUser}){
    return { currentUser };
}

  signUp = () => {
    setState("currentView", "SignUp")
  }
 
  render() {
    return (
      <div className="Form">
        <br></br>
        <br></br>
        <a href = "./">
        <img
              alt="ShareNear Logo"
              src={logo}
              width="175px"
              height="100px"
              className="d-inline-block align-top"
        />
        </a>
        <br></br>
        <h3>Welcome to ShareNear</h3>
        <p>Your One-Stop Online Rent Marketplace</p>
        <br></br>

        <br></br>

		<div className="input">
		<TextField
            name="username"
            label="Username"
            className="textfield login__input app__input app__horizontal-center"
            margin="normal"
            onChange={e => updateLoginForm(e.target)}
        />
		</div>
		<div className="input">
		<TextField
                        name="password"
                        label="Password"
                        type="password"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />
		</div>
     

        <br></br>
        <br></br>
          <button onClick={ this.props.checkUser }>Sign In</button>
        <br></br>
        <br></br>
        <a className="signup-link" onClick={this.signUp}>Don't have an account? Sign Up</a>
        <br/>
        <a href="./signup">Forgot your password?</a>
      </div>

    );
  }
}


export default LoginForm;