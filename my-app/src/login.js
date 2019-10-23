import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

/* Component for the Home page */
class login extends React.Component {
    render() {
        return (
            <div>

                { /* Inputs to add student */}
                <input username='username'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="username" />

                <input password='password'
                    //  value={ this.props.studentName } 
                    //  onChange={this.props.handleChange} 
                    type="text"
                    placeholder="password" />







                {/* <button onClick={ this.props.addStudent }>Add Student</button> */}

            </div>
        );
    }
}

export default login;
