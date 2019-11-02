import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';

/* Component for a user to create a post and put an item up for rent */
class newPost extends React.Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <br/>
                <h3>Rent Form</h3>
                <br/>
                <a href="./">
                    <button type="button">Create Post</button>
                </a>
            </div>

        );
    }
}

export default newPost;