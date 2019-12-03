import React from 'react';
import '../App.css';
import ItemPic from '../assets/NewItem.png'
import AppNavbar from './Navbar';
import { getState, setState } from "statezero";
import { Link } from 'react-router-dom';
import { updatePostForm } from '../actions/user.js'
import TextField from "@material-ui/core/TextField";
import BaseReactComponent from './BaseReactComponent';

// import updatePostForm = field => {
//     const { name, value } = field;
//     setState(`postForm.${name}`, value);
// };

/* Component for a user to create a post and put an item up for rent */
class newPost extends BaseReactComponent {
    filterState({ currentUser, itemList }) {
        return { currentUser, itemList };
    }
    
    postItem = () => {
        console.log(getState("itemList"));
        console.log(getState("postForm"));
        console.log(`/users/${getState('currentUser')._id}   `);

		if (getState("postForm") == null){
			
		}
		else if (getState("postForm").name == "" || getState("postForm").description == "" || getState("postForm").price == "" || getState("postForm").duration == "" || getState("postForm").location == ""
			|| !(getState("postForm").name) || !(getState("postForm").description) || !(getState("postForm").price) || !(getState("postForm").duration) || !(getState("postForm").location)){
						
				alert('All fields are required.') 
		}
		else{
			console.log(getState('currentUser'))

			const request = new Request(`/users/${ getState('currentUser')._id }   `, {
				method: "post",
				body: JSON.stringify({
					name: getState("postForm").name,
					description: getState("postForm").description,
					price: getState("postForm").price,
					duration: getState("postForm").duration,
					location: getState("postForm").location,
					isAvailable: true,
					renter: getState('currentUser')._id
				}),
				headers: {
					accept: "application/json, text/plain, /",
					"content-type": "application/json"
				}
			});
			//send the request with fetch()
			fetch(request)
				.then(res => {
					if (res.status === 200) {
					
					
						
					
						console.log("yoo we did it");
						setState("currentView", "UserProfile")
					

						const currList = Object.assign([], getState("itemList"));
						currList.push({name: getState("postForm").name,
										description: getState("postForm").description,
										price: getState("postForm").price,
										duration: getState("postForm").duration,
										location: getState("postForm").location,
										isAvailable: true,
										renter: getState('currentUser')._id})        


						setState("postForm", null);
						console.log(currList)
						// const newItemList = currList.push({name: getState("postForm").name,
						//                                                 description: getState("postForm").description,
						//                                                 price: getState("postForm").price,
						//                                                 duration: getState("postForm").duration,
						//                                                 location: getState("postForm").location,
						//                                                 isAvailable: true,
						//                                                 renter: getState('currentUser')._id})
						setState("itemList", currList)     
						console.log(getState("itemList"))          
						return res.json();
						
					}
				})
				.catch(error => {
					console.log("we failed :(");
					console.log(error);
				});
		}
    }

    render() {
        //console.log(this.state.name);
        console.log(getState("postForm"));
        return (
            <div className="Edit">
                <AppNavbar />

                <div id="sc-edprofile">
                    <h1>Post a New Item for Rent</h1>
                    <div className="sc-container">
						<input type="text" placeholder="Item Name" onChange={e => updatePostForm(e.target)} name="name" label="Item Name"/>
						<input type="text" placeholder="Description" onChange={e => updatePostForm(e.target)} name="description" label="Item Description"/>
						<input type="text" placeholder="price" onChange={e => updatePostForm(e.target)} name="price" label="Item Price"/>
						<input type="text" placeholder="Duration" onChange={e => updatePostForm(e.target)} name="duration" label="Rate"/>
						<input type="text" placeholder="Location" onChange={e => updatePostForm(e.target)} name="location" label="Item Location"/>
                        
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
                        <button type="button" onClick={this.postItem}>Submit</button>
                        {/*<Link to={{pathname: './listings', data: this.state}}><input type="submit" value="Create Post" /></Link>*/}
                    </div>
                </div>

</div>
            

        );
    }
}

export default newPost;