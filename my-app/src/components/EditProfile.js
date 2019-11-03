import React from 'react';
import '../App.css';

import AppNavbarLoggedIn from './NavbarLoggedIn';

/* Component for a user to create a post and put an item up for rent */
class editProfile extends React.Component {
    render() {
        return (
            <div className="Edit">
                <AppNavbarLoggedIn />

                <div id="sc-edprofile">
                    <h1>Let's Edit your Profile!</h1>
                    <div class="sc-container">
                        <input type="text" placeholder="New Username" />
                        <input type="password" placeholder="New Password" />
                        <input type="text" placeholder="Email Address" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="Location" />
                        <textarea placeholder="User Description" />
                    <select>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Other</option>
                    </select>
                    <input type="text" placeholder="Facebook Profile URL" />
                    <input type="text" placeholder="Twitter Profile URL" />
                    <input type="text" placeholder="Google+ Profile URL" />
                    <input type="text" placeholder="LinkedIn Profile URL" />
                        <button>Upload Profile Picture</button>
                    <a href="./profile"><input type="submit" value="Register" /></a>
                </div>
            </div>


            </div>

        );
    }
}

export default editProfile;