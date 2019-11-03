import React from 'react';
import '../App.css';

import AppNavbarLoggedIn from './NavbarLoggedIn';

/* Component for a user to create a post and put an item up for rent */
class newPost extends React.Component {
    render() {
        return (
            <div className="Edit">
                <AppNavbarLoggedIn />

                <div id="sc-edprofile">
                    <h1>Post a New Item for Rent</h1>
                    <div class="sc-container">
                        <input type="text" placeholder="Name of Item" />
                        <textarea placeholder="Description of Item" />
                        <input type="text" placeholder="Price" />
                        <select>
                            <option value="">per hour</option>
                            <option value="">per day</option>
                            <option value="">per week</option>
                            <option value="">per month</option>
                            <option value="">other</option>
                        </select>
                        <input type="text" placeholder="Location" />
                        <button>Upload Item Picture</button>
                        <a href="./"><input type="submit" value="Create Post" /></a>
                    </div>
                </div>


            </div>

        );
    }
}

export default newPost;