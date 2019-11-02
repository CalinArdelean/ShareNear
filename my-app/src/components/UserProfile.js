import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';

/* Component for the profile page */
class Profile extends React.Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
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