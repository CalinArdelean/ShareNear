import React from 'react';

/* Component to Login */

class SignUpForm extends React.Component {
    render() {
        return (
            <div>

                <br></br>
                <br></br>
                <h3>Welcome to ShareNear</h3>
                <p>Let's get you set up</p>
                <br></br>
                <br></br>
                <input firstname='firstname'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="First Name" />
                <br></br>
                <br></br>
                <input lastname='lastname'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="Last Name" />
                <br></br>
                <br></br>
                <input email='email'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="Email Address" />
                <br></br>
                <br></br>
                <input location='location'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="Location" />
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
                <br />
                <br />
                <input password='password'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="Confirm Password" />
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