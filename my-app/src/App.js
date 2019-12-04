import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { getState, setState } from "statezero";
import { readCookie } from "./actions/user";

//components (pages) used in our app
import Login from './components/LoginPage';
//import MainView from "./MainView";
import SignUp from './components/SignUpForm';
import Profile from './components/UserProfile';
import Home from './components/Home';
import Item from './components/ItemPage';
import Post from './components/CreatePost';
import Edit from './components/EditProfile';
import ModifyUser from './components/ModifyUserPage';
import Listings from './components/UserItems';
import Posts from './components/UserPosts';
import HomeFiltered from './components/HomeFiltered';
import HomeLayoutFiltered from './components/HomeLayoutFiltered';
import UserList from './components/UserListPage';
import BaseReactComponent from './components/BaseReactComponent';
import { useState } from "react";
import MainView from './MainView';
import RenterProfile from './components/RenterProfile'

/* Main JavaScript component for our app, linking all other components to each other */
class App extends BaseReactComponent {
    
    filterState({ currentUser,  currentView }){
        return { currentUser, currentView };
    }

    constructor(props) {
        super(props);
        readCookie();
    }

    render() {
		
        const { currentUser} = this.state;
        let view = <Login/>;
        
        if(!currentUser && getState("currentView") !== "SignUp"){
            view = <Login/>
        }
        else if(getState("currentView") === "UserProfile"){
            view = <Profile />
        }
        else if (getState("currentView") === "Item") {
            view = <Item />
        }
        else if(getState("currentView") === "Login"){
            view = <Login />
        }
        else if(getState("currentView") === "Home"){
            view = <Home />
        }
        else if(getState("currentView") === "SignUp"){
            view = <SignUp />
        }
        else if(getState("currentView") === "CreatePost"){
            view = <Post />
        }
        else if(getState("currentView") === "EditProfile"){
            view = <Edit />
        }
        else if(getState("currentView") === "UserListPage"){
            view = <UserList />
        }
        else if(getState("currentView") === "ModifyUserPage"){
            view = <ModifyUser />
        }
        else if(getState("currentView") === "RenterProfile"){
            view = <RenterProfile />
        }
		else if(getState("currentView") === "HomeFiltered"){
            view = <HomeFiltered />
        }
        else if (getState("currentView") === "UserPostings"){
            view = <Posts/>

        }

        return (
            <div className="app">
            {view}
            </div>
        );
    }
}


export default App;