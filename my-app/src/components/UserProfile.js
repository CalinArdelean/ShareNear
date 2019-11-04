import React from 'react';
import '../App.css';
import profilepicture from '../assets/userpicture.jpg';
import PaulBlart from '../assets/paul_blart.jpg';
import MarySmith from '../assets/adminpicture.jpg';
import JacobJacobson from '../assets/louisCK.jpg';
import AppNavbarLoggedIn from './NavbarLoggedIn';

//import { user } from './LoginPage';

var sellers = [
    { id: 0, name: 'John Doe', address: 'North York, ON', description: 'Hi I\'m John! I primarily rent out household items that I no longer have much use for. If you are interested in one of my listings, have questions or concerns, or would like to negotiate prices, feel free to contact me, preferably through my cell. Thanks in advance!', phoneNumber: '416-900-8555', email: 'JohnDoe123@hotmail.com', itemIDs: [], image: profilepicture },
    { id: 1, name: 'Paul Blart', address: 'Mississauga, ON', description: 'Hi, I\'m Paul. Hope you enjoy my stuff! Phone number below.', phoneNumber: '343-373-5121', email: 'paulsstuff@gmail.com', itemIDs: [0, 2, 3, 5], image: PaulBlart },
    { id: 2, name: 'Jacob Jacobson', address: 'Toronto, ON', description: 'Hey, welcome to my profile. Feel free to call me any time of the day!', phoneNumber: '416-647-7644', email: 'jacobjacob@gmail.com', itemIDs: [1, 4, 6, 7, 8], image: JacobJacobson },
    { id: 3, name: 'Mary Smith', address: 'Oakville, ON', description: 'Proud to see ShareNear being used so frequently. Questions about the site? Please send me an email!', phoneNumber: '647-880-3325', email: 'MarySmithers@hotmail.com', itemIDs: [], image: MarySmith }
]


/* Component for the profile page */
class Profile extends React.Component {


    

    render() {
        //console.log(user);
        let data = this.props.location.data;
        this.props.location.state = this.props.location.data;
        console.log(this.props.location.state);
        //console.log("Item ID: " + this.props.location.data);

        let seller = sellers[3];

        

        if (typeof (data) !== 'undefined') {
            console.log("TYPEOF: " + typeof (data));
            for (let i = 0; i < sellers.length; i++) {
                for (let j = 0; j < sellers[i].itemIDs.length; j++) {
                    if (sellers[i].itemIDs[j] == data) {
                        seller = sellers[i];
                        break;
                    }
                }
            }
        }
        console.log("Seller ID: " + seller.id);

        return (
            <div>
                <AppNavbarLoggedIn />
                <div className="Profile">
                    <br></br>
                    {this.editProfileButton(data)}
                    <h4>{seller.name}</h4>
                    <br/>
                    <img
                        alt="profile picture"
                        src={seller.image}
                        className="d-inline-block align-top"
                    ></img>
                    <br></br>
                    <h5>{seller.address}</h5>
                    <h6>{seller.description}</h6>                  
                    <br></br>
                    <i class="fas fa-phone-square-alt"></i> <p>{seller.phoneNumber}</p>
                    <i class="far fa-envelope"></i> <p>{seller.email}</p>
                    {this.createAndViewListings(data)}
                </div>
                
            </div>

        );
    }

    editProfileButton(data) {

        if (typeof (data) == 'undefined') {
            return (
                <div>
                    <h3>Welcome to your profile! </h3>
                    <br></br>
                    <div className="Right" className="edit">
                        <a href="./edit">
                            <button type="button">Edit Profile</button>
                        </a>
                    </div> <br /> </div>
            );
        }
    }

    createAndViewListings(data) {
        if (typeof (data) == 'undefined') {
            return (
                <div>
                <a href="./newpost">
                    <button type="button">Create New Listing</button>
                </a>
                <br /> <br></br>
                <a href="./listings">
                    <button type="button">View Your Listings</button>
                </a>
                </div>
            );
        }
    }
}

export default Profile;