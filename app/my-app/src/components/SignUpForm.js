import React from 'react';
// import './Forms.css';
import logo from '../logo.svg';
import TextField from "@material-ui/core/TextField";
import { updateSignupForm } from './LoginPage';
import { getState, setState } from "statezero";

/* Component to sign up */
class SignUpForm extends React.Component {

	postUser = () => {

		console.log(getState("signupForm"));
		const request = new Request("/users", {
		 	method: "post",
		 	body: JSON.stringify(getState("signupForm")),
		 	headers: {
		 	accept: "application/json, text/plain, /",
		 	"content-type": "application/json"
		 	}
		});
		
		 //send the request with fetch()
		 fetch(request)
		 	.then(res => {
		 	if (res.status === 200) {
                 console.log("yoo we did it");
                 setState("currentUser", getState("signupForm"))
		 		return res.json();
		 	}
		 	})

		 	.catch(error => {
		 	console.log("we have failed");
		 	console.log(error);
		 	});

	}


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
                        label="First Name"
                        type="firstname"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
                
                </div>
                <div className="input">
				<TextField
                        name="lastname"
                        label="Last Name"
                        type="lastname"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
                
                </div>
                <br></br>
                <div className="input">
				<TextField
                        name="phonenumber"
                        label="Phone Number"
                        type="phonenumber"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
              
                </div>
                <div className="input">
				<TextField
                        name="email"
                        label="Email Address"
                        type="email"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
                </div>
                <br></br>
                <div className="input">
				<TextField
                        name="location"
                        label="Location"
                        type="Location"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
                
                </div>
                <div className="input">
				<TextField
                        name="username"
                        label="Username"
                        type="username"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
                
                </div>             
                <br></br>
                <div className="input">            
				<TextField
                        name="password"
                        label="Password"
                        type="password"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
                
                </div>
                <div className="input">
				<TextField
                        name="password"
                        label="Confirm Password"
                        type="password"
                        className="textfield login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateSignupForm(e.target)}
                    />
                
                </div>
                <br />
                <br />
                
                    <button type="button" onClick={ this.postUser }>Sign Up</button>
                
                <br></br>
                <br></br>
                <a href="./login">Already have an account? Login Here</a>
            </div>

        );
    }
}

export default SignUpForm;