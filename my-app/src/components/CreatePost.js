import React from 'react';
import '../App.css';
import ItemPic from '../assets/NewItem.png'
import AppNavbar from './Navbar';
import { getState, setState } from "statezero";
import { Link } from 'react-router-dom';
import { updatePostForm } from '../actions/user.js'
import TextField from "@material-ui/core/TextField";
// import updatePostForm = field => {
//     const { name, value } = field;
//     setState(`postForm.${name}`, value);
// };

/* Component for a user to create a post and put an item up for rent */
class newPost extends React.Component {
    //will have to read information from a data base and push new item to database instead of this
    /*state = {
        id: 9,
        image: ItemPic,
        name: "",
        description: "",
        price: "",
        location: "",
        seller: "John Doe",
        address: "123 Placeholder Lane"
    }*/

    // handleInputChange = (event) => {
    //     const target = event.target
    //     const value = target.value
    //     const name = target.name

    //     //this.setState({
    //     //    [name]: value
    //     //})

    // }


    render() {
        //console.log(this.state.name);
        console.log(getState("postForm"));
        return (
            <div className="Edit">
                <AppNavbar />

                <div id="sc-edprofile">
                    <h1>Post a New Item for Rent</h1>
                    <div className="sc-container">
                        <div className="input">
                            <TextField
                                name="name"
                                label="Item Name"
                                type="name"
                                className="textfield login__input app__input app__horizontal-center"
                                margin="normal"
                                onChange={e => updatePostForm(e.target)}
                            />
                        </div>
                        <div className="input">
                            <TextField
                                name="description"
                                label="Item Description"
                                type="description"
                                className="textfield login__input app__input app__horizontal-center"
                                margin="normal"
                                onChange={e => updatePostForm(e.target)}
                            />
                        </div>
                            <div className="input">
                                <TextField
                                    name="price"
                                    label="Item Price"
                                    type="price"
                                    className="textfield login__input app__input app__horizontal-center"
                                    margin="normal"
                                    onChange={e => updatePostForm(e.target)}
                                />
                            </div>
                                <div className="input">
                                    <TextField
                                        name="duration"
                                        label="Duration (Per hour/day etc.)"
                                        type="duration"
                                        className="textfield login__input app__input app__horizontal-center"
                                        margin="normal"
                                        onChange={e => updatePostForm(e.target)}
                                    />
                                </div>
                                <div className="input">
                                    <TextField
                                        name="location"
                                        label="Item Location"
                                        type="location"
                                        className="textfield login__input app__input app__horizontal-center"
                                        margin="normal"
                                        onChange={e => updatePostForm(e.target)}
                                    />
                                </div>
                        {/* <input name='name' value='name' onChange={e => updatePostForm(e.target)} type="text" placeholder="Name of Item" />
                        <textarea name='description' value='description' onChange={e => updatePostForm(e.target)} type="text" placeholder="Description of Item" />
                        <input name='price' value='price' onChange={e => updatePostForm(e.target)} type="text" placeholder="Price" /> */}
                        {/* <select>
                            <option value="">per hour</option>
                            <option value="">per day</option>
                            <option value="">per week</option>
                            <option value="">per month</option>
                            <option value="">other</option>
                        </select>
                        <input name='location' value='location' onChange={e => updatePostForm(e.target)} type="text" placeholder="Location" /> */}
                        <button>Upload Item Picture</button>
                        <button>Submit</button>
                        {/*<Link to={{pathname: './listings', data: this.state}}><input type="submit" value="Create Post" /></Link>*/}
                    </div>
                </div>

</div>
            

        );
    }
}

export default newPost;