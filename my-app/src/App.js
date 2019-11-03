import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
// import Button from '@material-ui/core/Button';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './components/LoginPage';
import SignUp from './components/SignUpForm';
import Profile from './components/UserProfile';
import Home from './components/Home';
import Item from './components/ItemPage';
import Post from './components/CreatePost';
import Edit from './components/EditProfile';
import Listings from './components/UserItems';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <BrowserRouter>
                        <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */}
                            { /* Each Route below shows a different component depending on the exact path in the URL  */}
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/signup' component={SignUp} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/newpost' component={Post} />
                            <Route exact path='/item' component={Item} />
                            <Route exact path='/edit' component={Edit} />
                            <Route exact path='/listings' component={Listings} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;