import React from 'react';
import '../App.css';
import profilepicture from '../assets/userpicture.jpg';
import profilepic from '../assets/ProfilePic.jpg';
import PaulBlart from '../assets/paul_blart.jpg';
import MarySmith from '../assets/adminpicture.jpg';
import JacobJacobson from '../assets/louisCK.jpg';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import AppNavbar from './Navbar';
import BaseReactComponent from './BaseReactComponent';
import { getState, setState } from "statezero";



//hard coded data of sellers that we will need to read from a database
var sellers = [
    { id: 0, name: 'John Doe', address: 'North York, ON', description: 'Hi I\'m John! I primarily rent out household items that I no longer have much use for. If you are interested in one of my listings, have questions or concerns, or would like to negotiate prices, feel free to contact me, preferably through my cell. Thanks in advance!', phoneNumber: '416-900-8555', email: 'JohnDoe123@hotmail.com', itemIDs: [], image: profilepicture },
    { id: 1, name: 'Paul Blart', address: 'Mississauga, ON', description: 'Hi, I\'m Paul. Hope you enjoy my stuff! Phone number below.', phoneNumber: '343-373-5121', email: 'paulsstuff@gmail.com', itemIDs: [0, 2, 3, 5], image: PaulBlart },
    { id: 2, name: 'Jacob Jacobson', address: 'Toronto, ON', description: 'Hey, welcome to my profile. Feel free to call me any time of the day!', phoneNumber: '416-647-7644', email: 'jacobjacob@gmail.com', itemIDs: [1, 4, 6, 7, 8], image: JacobJacobson },
    { id: 3, name: 'Mary Smith', address: 'Oakville, ON', description: 'Proud to see ShareNear being used so frequently. Questions about the site? Please send me an email!', phoneNumber: '647-880-3325', email: 'MarySmithers@hotmail.com', itemIDs: [], image: MarySmith }
]


/* Component for the profile page of users */
class Profile extends BaseReactComponent {
    filterState({ currentUser, itemList }){
        return { currentUser, itemList };
    }

    createListing = () => {
        setState("currentView", "CreatePost")
    }

	editProfile = () => {
        setState("currentView", "EditProfile")
    }

    
    render() {
        console.log(getState("itemList"));
        return (
            <div className="App">
                <AppNavbar />
                <div className="Profile">
                <h4> Welcome to your profile {getState("currentUser").firstname} !</h4>
                <br></br>
                <br></br>
                <button type="button">Create New Listing</button></div>
                <div className="Profile">
                    <br></br>
					
                    
                    <h4>{getState("currentUser").firstname} {getState("currentUser").lastname}</h4>
                    <br/>
                    <img
                        alt="profile picture"
                        src={profilepic}
                        className="d-inline-block align-top"
                    ></img>
                    <br></br>
                    <br></br>
                    <h5>{getState("currentUser").location}</h5>
                    <h6>{getState("currentUser").description}</h6>                  
                    <br></br>
                    <i class="fas fa-phone-square-alt"></i> <p>{getState("currentUser").phonenumber}</p>
                    <i class="far fa-envelope"></i> <p>{getState("currentUser").email}</p>
                    {<button type="button" onClick={this.editProfile}>Edit Profile</button>}
					<br></br><br></br>
                    {<button type="button" onClick={this.createListing}>Create New Listing</button>}
					<br></br>
                </div>
            </div>

        );
    }

}

export default Profile;