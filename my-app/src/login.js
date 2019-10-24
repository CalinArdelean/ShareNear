import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

            </div>

        );
    }
}

export default login;
