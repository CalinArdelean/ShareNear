import React from 'react';
// import './Forms.css';

//same imports as HomeLayout
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dotdotdot from 'react-dotdotdot';
import './ItemPage.css';
import AppNavbar from './Navbar';
import AppNavbarLoggedIn from './NavbarLoggedIn';
import { spacing } from '@material-ui/system';
import { Link } from 'react-router-dom';

//import arrays

import { listings } from './HomeLayout';

let isValid = 0;

class ItemPage extends React.Component {


    renderNavbar() {
        
        if (this.props.location.isValidUser === 1) {
            return (
                <div className="App">
                    <AppNavbarLoggedIn
                        currentUser={this.props.currentUser}
                    />
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <AppNavbar />
                </div>
            );
        }
    }


    render() {

        // Show 'View Profile' link on Navbar only if user is logged in
        if (typeof (this.props.location.isValidUser) !== 'undefined') {
            isValid = this.props.location.isValidUser;
            console.log("ItemPage isValid " + isValid);
        }



        //console.log(this.props.location);
        
        var data = 0;
        if (typeof (this.props.location.itemIndex) !== 'undefined') {
            data = this.props.location.itemIndex;
        }
        console.log("PROPS IS: " + this.props.location.itemIndex);

        return (
            <div className="root">
                {this.renderNavbar()}
                <Paper className="paper">
                    
                        <Grid item container direction="row" justify="space-evenly" className="item">
                            <Grid item className="imageWrapper">
                            <ButtonBase className="image">
                                <img className="img" alt="logo" src={listings[data].image} />
                            </ButtonBase>
                            </Grid>
                            <Grid item className="info" direction="column">
                                <Grid item direction="column">
                                    <Typography gutterBottom variant="header" className="name">
                                        {listings[data].name}
                                    </Typography>
                                    <Grid item className="seller">
                                        {listings[data].seller}
                                    </Grid>
                                    <Grid item className="city">
                                        {listings[data].address}, {listings[data].location}
                                    </Grid>
                                    <Grid item className="description">
                                        {listings[data].description}
                                    </Grid>
                                    <Grid item className="price">
                                        ${listings[data].price}/day
                                    </Grid>
                                    
                                </Grid>
                                <Grid item className="rent">
                                    <Link
                                        to={{
                                            pathname: "./profile",
                                            data: data,
                                            isValidUser: isValid
                                        }}>
                                    Rent this item
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item>
                                
                            </Grid>
                        </Grid>
                    
                </Paper>
                <Link
                    to={{
                        pathname: "./",
                        validUser: isValid
                        
                    }}> Return to Listings </Link>
            </div>
        );
    }
}
export default ItemPage;