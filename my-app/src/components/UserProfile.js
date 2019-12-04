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
    
    viewListing = () => {
            //console.log(getState("itemList"));
            const url = '/users';
            // Since this is a GET request, simply call fetch on the URL
            fetch(url)
                .then((res) => {
                    if (res.status === 200) {
                        // return a promise that resolves with the JSON body
                        return res.json()
                    } else {
                        alert('Could not get users')
                    }
                })
                .then((json) => {  // the resolved promise with the JSON body
                    let allUsers = json.users
                    const items = []
                    for (let i = 0; i < allUsers.length; i++) {
                        for (let j = 0; j < allUsers[i].itemlist.length; j++) {
                            if ((allUsers[i].itemlist[j]).renter === getState("currentUser")._id) {
                                items.push(allUsers[i].itemlist[j])
                            }
                        }
                    }
                    console.log(items);
                    setState("itemList", items);
                    const self = this;
                    self.setState({ data: items });
                    setState("currentView", "UserPostings");
                }).catch((error) => {
                    console.log(error)
                });

        
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
					<br></br><br></br>
                    {<button type="button" onClick={this.viewListing}>View Your Listings</button>}
                    <br></br><br></br>
                </div>
            </div>

        );
    }

}

export default Profile;