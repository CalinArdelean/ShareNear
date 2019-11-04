import React from 'react'
import '../App.css';
import logo from '../logo.svg';
import { Navbar, Nav, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


//component for the navbar at the top of the home page
class AppNavbar extends React.Component {

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

  render() {
    return (
        <Navbar variant="dark" className="App-navbar">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="75px"
              // height="5px"
              className="d-inline-block align-top"
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
              <a href="./login">Login
              &nbsp; <i className="fas fa-user"></i>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>      
    );
  }
}

export default AppNavbar;