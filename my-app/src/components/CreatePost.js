import React from 'react';
import '../App.css';
import ItemPic from '../assets/NewItem.png'
import AppNavbarLoggedIn from './NavbarLoggedIn';
import { Link } from 'react-router-dom';

/* Component for a user to create a post and put an item up for rent */
class newPost extends React.Component {
    //will have to read information from a data base and push new item to database instead of this
    state = {
        id: 9,
        image: ItemPic,
        name: "",
        description: "",
        price: "",
        location: "",
        seller: "John Doe",
        address: "123 Placeholder Lane"
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    render() {
        console.log(this.state.name);
        return (
            <div className="Edit">
                <AppNavbarLoggedIn />

                <div id="sc-edprofile">
                    <h1>Post a New Item for Rent</h1>
                    <div className="sc-container">
                        <input name='name' value={this.state.name} onChange={this.handleInputChange} type="text" placeholder="Name of Item" />
                        <textarea name='description' value={this.state.description} onChange={this.handleInputChange} type="text" placeholder="Description of Item" />
                        <input name='price' value={this.state.price} onChange={this.handleInputChange} type="text" placeholder="Price" />
                        <select>
                            <option value="">per hour</option>
                            <option value="">per day</option>
                            <option value="">per week</option>
                            <option value="">per month</option>
                            <option value="">other</option>
                        </select>
                        <input name='location' value={this.state.location} onChange={this.handleInputChange} type="text" placeholder="Location" />
                        <button>Upload Item Picture</button>
                        {/*<Link to={{pathname: './listings', data: this.state}}><input type="submit" value="Create Post" /></Link>*/}
                    </div>
                </div>


            </div>

        );
    }
}

export default newPost;