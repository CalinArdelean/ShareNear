import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
import Home from './Home'


/* Component to Login */

class LoginForm extends React.Component {
  render() {
    console.log()
    if(this.props.validUser === 1){
      return (

        <div className="App">
           
          <Home 
            validUser={this.props.validUser}
            currentUser={this.props.currentUser}
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
    	         onChange={this.props.handleChange} 
    	         type="text" 
    	         placeholder="username" />

        <br></br>
        <br></br>

        <input name='userPassword' 
    	         value={ this.props.userPassword } 
    	         onChange={this.props.handleChange} 
    	         type="text" 
    	         placeholder="password" />

        <br></br>
        <br></br>
  
          <button onClick={ this.props.checkUser }>Sign In</button>
        <br></br>
        <br></br>
        <a href="./signup">Don't have an account already? Sign Up Here</a>

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

        <input name='userName' 
    	         value={ this.props.userName } 
    	         onChange={this.props.handleChange} 
    	         type="text" 
    	         placeholder="username" />

        <br></br>
        <br></br>

        <input name='userPassword' 
    	         value={ this.props.userPassword } 
    	         onChange={this.props.handleChange} 
    	         type="text" 
    	         placeholder="password" />

        <br></br>
        <br></br>
          <button onClick={ this.props.checkUser }>Sign In</button>
        <br></br>
        <br></br>
        <a href="./signup">Don't have an account already? Sign Up</a>
        <br/>
        <a href="./signup">Forgot your password?</a>
      </div>

    );
  }
}
}

export default LoginForm;