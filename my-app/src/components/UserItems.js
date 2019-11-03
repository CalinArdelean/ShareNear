import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import ComplexGrid from './HomeLayout';

// var loggedIn = false;


/* Component for the Home page */
class UserItems extends React.Component {
    render() {
        this.props.location.state = this.props.location.data;
        console.log(this.props.location.state);
        const item = this.props.location.state;
            return (
                <div className="App">
                    <AppNavbarLoggedIn
                    />
                    <br></br>
                    <h3>Your Listings:</h3>
                    <br></br>
                    <img
                        alt="item image"
                        src={item.image}
                        className="d-inline-block align-top"
                    ></img>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.location}</p> <br></br>
                </div>
            )
    }
}

export default UserItems;
