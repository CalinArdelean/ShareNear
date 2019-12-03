import React from 'react'
import '../App.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Container, Row, Col, Button } from 'react-bootstrap';
import { getState, setState } from "statezero";
import BaseReactComponent from './BaseReactComponent';
import LoginForm from './LoginForm';


//component for the navbar at the top of the home page
class AppNavbar extends BaseReactComponent {

  filterState({ currentUser, viewProfile }){
    return { currentUser, viewProfile };
}

  state = {
    location: ""
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
        [name]: value
    })

}

  getProfile = () => {
    setState("currentView", "UserProfile")
  }

  getHome = () => {
    setState("currentView", "Home")
  }

  getUsers = () => {
    setState("currentView", "UserListPage")
  }

  logout = () => {
    setState("currentUser", null)
  }

  render() {
    let adminButton = "";
    let adminIcon = "";
    if(getState("currentUser").usertype){
      adminButton = <button onClick={ this.getUsers } className="navbar-btn">View User List</button>;
      adminIcon = <i onClick={ this.getUsers } className="fas fa-list-ul"></i>;
    }

    return (
        <Navbar variant="dark" className="App-navbar">
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="75px"
                    className="d-inline-block align-top"
                    className="navbar-logo"
                    onClick={ this.getHome }
                />
            </Navbar.Brand>
          <Form inline className="text-white">
            <FormControl type="text" placeholder="Item" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            <FormControl name='location' value={this.state.location} onChange={this.handleInputChange} type="text" placeholder="Location" className="ml-4 text-white rounded-0 bg-transparent border-left-0 border-right-0 border-top-0" />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="./HomeFiltered">
            <i className="fas fa-search"></i>
            {/* <Link to={{pathname: './HomeLayoutFiltered', data: this.state.location}}><button className="fas fa-search" /></Link> */}
            </a>
          </Form> 
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              {/* <button onClick={ this.props.checkUser }>Sign In</button> */}
              <a> {adminButton} {adminIcon} </a> &nbsp; 
              <button onClick={ this.getProfile } className="navbar-btn">View Profile</button>
              <i onClick={ this.getProfile } className="fas fa-user"></i> &nbsp;
              <a href='./'><button onClick={ this.logout } className="navbar-btn">Logout</button></a>
              <i onClick={ this.logout } class="fas fa-sign-out-alt"></i>
              {/* <a href="./login">Logout 
              </a> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>      
    );
  }
}

export default AppNavbar;