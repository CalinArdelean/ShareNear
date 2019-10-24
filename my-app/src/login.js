import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

<<<<<<< HEAD
/* Component for the Home page */

class login extends React.Component {
    render() {
        return (
            <div>

                { /* Inputs to add user */}
                <br></br>
                <br></br>
                <h4>Welcome to ShareNear</h4>
                <br></br>
                <br></br>
                <input username='username'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="username" />
                <br></br>
                <br></br>
                <input password='password'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="password" />
                <br></br>
                <br></br>
                <a href="./">Don't have an account already? Sign Up Here</a>

                {/* <Button variant="contained" className={classes.button}>
                    Default
                </Button>
                 */}

=======
import AppNavbar from './components/Navbar';
import LoginForm from './components/LoginForm';

/* Component for the Login page */
class Login extends React.Component {

    state = {
        userName: "",
        passWord: "",
        users: [
          {username: "user", password: "user"},
          {username: "admin", password: "admin"}
        ]
      }

    // Generic handler for whenever we type in an input box.
    handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const username = target.username
    
    // 'this' is bound to the component in this arrow function.
    this.setState({
      [username]: value  // [name] sets the object property name to the value of the 'name' variable.
        })

    }

    render() {
        return (
            <div className="App">
                <AppNavbar />
                <LoginForm 
                    userName={ this.state.userName }
                    passWord={ this.state.passWord }
                    handleChange={ this.handleInputChange } 
                />
                {/* <div>
                    <input username='username'
                        type="text"
                        placeholder="username" />

                    <input password='password'
                        type="text"
                        placeholder="password" />
                </div> */}
>>>>>>> 4d3c90f3fcb518440038eb16ae87b759ee5b2958
            </div>

        );
    }
}

export default Login;
