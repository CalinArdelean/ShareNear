import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import AppNavbar from './Navbar';


class App extends React.Component {
  render() {
  return (

    <div className="App">
      <header className="App-header">
        <AppNavbar/>
      </header>

    </div>
  );
  }
}



export default App;
