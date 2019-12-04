import React from 'react';
import '../App.css';
import item from '../assets/NewItem.png';
import AppNavbar from './Navbar';
import BaseReactComponent from './BaseReactComponent';
import { getState, setState } from "statezero";
import UsersLayout from "./UsersLayout";

/* Component for the profile page of users */
class UserPosts extends BaseReactComponent {
    filterState({ currentUser, itemList }) {
        return { currentUser, itemList };
    }


    render() {
        return (
            <div className="App">
                <AppNavbar />
                <UsersLayout/>
            </div>

        );
    }

}

export default UserPosts;