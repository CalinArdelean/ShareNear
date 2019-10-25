import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
//import './Forms.css';


/* Component to Login */

class LoginForm extends React.Component {
  render() {
    return (
      <div className="Form">
        <br></br>
        <br></br>
        <img
              alt=""
              src={logo}
              width="175px"
              height="100px"
              className="d-inline-block align-top"
            />
        <h3>Welcome to ShareNear</h3>
        <p>Your One-Stop Online Rent Marketplace</p>
        <br></br>
        <br></br>
        <input username='username'
          //  value={ this.props.studentName } 
          //  onChange={this.props.handleChange} 
          type="text"
          placeholder="Username" />
        <br></br>
        <br></br>
        <input password='password'
          //  value={ this.props.studentName } 
          //  onChange={this.props.handleChange} 
          type="text"
          placeholder="Password" />
        <br/>
        <br/>
        <a href="./">
          <button type="button">Sign In</button>
        </a>
        <br></br>
        <br></br>
        <a href="./signup">Don't have an account already? Sign Up Here</a>

      </div>

    );
  }
}

export default LoginForm;