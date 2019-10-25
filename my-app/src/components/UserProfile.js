import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';

/* Component for the profile page */
class Profile extends React.Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <h3>Welcome to your profile!</h3>
            </div>

        );
    }
}

export default Profile;