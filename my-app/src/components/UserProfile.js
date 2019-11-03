import React from 'react';
import '../App.css';
import profilepicture from '../assets/userpicture.jpg';
import AppNavbarLoggedIn from './NavbarLoggedIn';

/* Component for the profile page */
class Profile extends React.Component {
    render() {
        return (
            <div className="App">
                <AppNavbarLoggedIn />
                <div className="Profile">
                    <br></br>
                    <h3>Welcome to your profile John!</h3>
                    <br/>
                    <img
                        alt=""
                        src={profilepicture}
                        className="d-inline-block align-top"
                    ></img>
                <br></br> <br/>
                <a href="./newPost">
                    <button type="button">Make a new listing</button>
                </a>
                </div>
            </div>

        );
    }
}

export default Profile;