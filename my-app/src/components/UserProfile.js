import React from 'react';
import '../App.css';

import AppNavbarLoggedIn from './NavbarLoggedIn';

/* Component for the profile page */
class Profile extends React.Component {
    render() {
        return (
            <div className="App">
                <AppNavbarLoggedIn />
                <div className="Profile">
                    <br></br>
                <h3>Welcome to your profile!</h3>
                <br></br>
                <a href="./newPost">
                    <button type="button">Make a new posting</button>
                </a>
                </div>
            </div>

        );
    }
}

export default Profile;