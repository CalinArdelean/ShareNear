import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';


/* Component to Login */

class LoginForm extends React.Component {

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

        {/* <input username='username' 
          type="text"
          placeholder="Username" />
        <br></br>
        <br></br>
        <input password='password'
          type="text"
          placeholder="Password" />
        <br/>
        <br/> */}
        {/* <a href="./">
          <button type="button">Sign In</button>
        </a> */}

        <button onClick={ this.props.checkUser }>Sign In</button>
        <br></br>
        <br></br>
        <a href="./signup">Don't have an account already? Sign Up Here</a>

      </div>

    );
  }
}

export default LoginForm;