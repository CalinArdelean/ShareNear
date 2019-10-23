import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import AppNavbar from './Navbar';
import login from './login';


class App extends React.Component {
  render() {
  return (

    <div className="App">
      <header className="App-header">
        <AppNavbar/>
      </header>

      <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/login' component={login}/>
          </Switch>
        </BrowserRouter>
      </div>

    </div>
  );
  }
}



export default App;
