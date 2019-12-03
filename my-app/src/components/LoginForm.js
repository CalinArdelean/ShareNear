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

// const bcrypt = require('bcryptjs')

/* Component to Login */

class LoginForm extends BaseReactComponent {

  filterState({ currentUser}){
    return { currentUser };
}

  signUp = () => {
    setState("currentView", "SignUp")
  }
 
  render() {
    console.log("here we are");
    if(this.props.validUser === 1){
      return (

        <div className="App">
           
          <Home 
            validUser={this.props.validUser}
            currentUser={this.props.currentUser}
            admin={this.props.admin}
            />
         
        </div>
      );
    }
    else if(this.props.validUser === 0){
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
        <p> Invalid username or password.</p>

        <input name='userName' 
    	         value={ this.props.userName } 
    	         onChange={e => updateLoginForm(e.target)} 
    	         type="text" 
    	         placeholder="username" />

        <br></br>
        <br></br>
		<TextField
            name="email"
            label="Email"
            className="login__input app__input app__horizontal-center"
            margin="normal"
            onChange={e => updateLoginForm(e.target)}
        />

		<TextField
                        name="password"
                        label="Password"
                        type="password"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(e.target)}
                    />

        <input name='userPassword' 
    	         value={ this.props.userPassword } 
    	         onChange={e => updateLoginForm(e.target)} 
    	         type="text" 
    	         placeholder="password" />

        <br></br>
        <br></br>
  
          <button onClick={ this.props.checkUser }>Sign In</button>
        <br></br>
        <br></br>
        <a href="./signup">Don't have an account? Sign Up Here</a>
        <br/>
        <a href="./signup">Forgot your password?</a>
      </div>

    );
  }
  else{
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
            name="email"
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
}

export default LoginForm;