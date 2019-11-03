import React from 'react';
import '../App.css';
import profilepicture from '../assets/userpicture.jpg';
import AppNavbarLoggedIn from './NavbarLoggedIn';

/* Component for the profile page */
class Profile extends React.Component {
    render() {
        return (
            <div>
                <AppNavbarLoggedIn />
                <div className="Profile">
                    <br></br>
                <h3>Welcome to your profile John! </h3>
                <br></br>  
                    <div className="Right" className="edit">
                        <a href="./edit">
                            <button type="button">Edit Profile</button>
                        </a>
                    </div> <br /> 
                <h4>John Doe</h4>
                    <br/>
                    <img
                        alt=""
                        src={profilepicture}
                        className="d-inline-block align-top"
                    ></img>
                    <br></br>
                    <h5>North York, ON</h5>
                    <h6>Hi I'm John! I primarily rent out household items that I no longer have much use for.
                         If you are interested in one of my listings, have questions or concerns, or would like
                          to negotiate prices, feel free to contact me, preferably through my cell. Thanks in advance!</h6>                  
                <br></br> 
                    <i class="fas fa-phone-square-alt"></i> <p>416-900-8555</p>
                    <i class="far fa-envelope"></i> <p>JohnDoe123@hotmail.com</p>
                <a href="./newpost">
                    <button type="button">Create New Listing</button>
                </a>
                <br/> <br></br>
                    <a href="./">
                        <button type="button">View Your Listings</button>
                    </a>
                </div>
                
            </div>

        );
    }
}

export default Profile;