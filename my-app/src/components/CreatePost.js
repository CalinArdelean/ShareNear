import React from 'react';
import '../App.css';
import ItemPic from '../assets/NewItem.png'
import AppNavbarLoggedIn from './NavbarLoggedIn';

/* Component for a user to create a post and put an item up for rent */
class newPost extends React.Component {
    
    newItem = {
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
        return (
            <div className="Edit">
                <AppNavbarLoggedIn />

                <div id="sc-edprofile">
                    <h1>Post a New Item for Rent</h1>
                    <div className="sc-container">
                        <input name='name' value={this.newItem.name} onChange={this.newItem.handleChange} type="text" placeholder="Name of Item" />
                        <textarea name='description' value={this.newItem.description} onChange={this.newItem.handleChange} type="text" placeholder="Description of Item" />
                        <input name='price' value={this.newItem.price} onChange={this.newItem.handleChange} type="text" placeholder="Price" />
                        <select>
                            <option value="">per hour</option>
                            <option value="">per day</option>
                            <option value="">per week</option>
                            <option value="">per month</option>
                            <option value="">other</option>
                        </select>
                        <input name='location' value={this.newItem.location} onChange={this.newItem.handleChange} type="text" placeholder="Location" />
                        <button>Upload Item Picture</button>
                        console.log(this.newItem);
                        <a href="./"><input type="submit" value="Create Post" /></a>
                    </div>
                </div>


            </div>

        );
    }
}

export default newPost;