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
import { spacing } from '@material-ui/system';
import { Link } from 'react-router-dom';
import image from '../assets/NewItem.png';
import { getState, setState } from "statezero";
//import arrays

import { listings } from './HomeLayout';

//let isValid = 0;

//component to display a single item page
class ItemPage extends React.Component {


    renderNavbar() {
        return (
            <div className="App">
                <AppNavbar />
            </div>
        );
        // if (this.props.location.isValidUser === 1) {
        //     return (
        //         <div className="App">
        //             <AppNavbarLoggedIn
        //                 currentUser={this.props.currentUser}
        //             />
        //         </div>
        //     );
        // }
        // else {
        //     return (
        //         <div className="App">
        //             <AppNavbar />
        //         </div>
        //     );
        // }
    }

    goHome = () => {
        setState("currentView", "Home");
    }

    rentItem = () => {
        const url = `/users/${getState("currentItem").renter}`;
    
      // Since this is a GET request, simply call fetch on the URL
      fetch(url)
      .then((res) => { 
          if (res.status === 200) {
              // return a promise that resolves with the JSON body
             return res.json() 
         } else {
              alert('Could not get users')
         }                
      })
      .then((json) => {  // the resolved promise with the JSON body
          console.log(json)
          setState("renter", json)
          
            //let reqString = ;
            console.log(getState('currentUser'));
            console.log(getState('editForm'));
            const request = new Request(`/users/${getState('renter')._id}/${getState("currentItem")._id}`, {
            
                method: "put",
                body: JSON.stringify({
                    isAvailable: false
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
                    console.log("yoo we did it edit profile");
                    //setState("currentView", "Home")
                return res.json();
            }
            })
            .catch(error => {
            console.log("we have failed");
            console.log(error);
            });
            
            setState("currentView", "RenterProfile");
      }).catch((error) => {
          console.log(error)
      });
       
        
    }

    render() {

        // Show 'View Profile' link on Navbar only if user is logged in
        // if (typeof (this.props.location.isValidUser) !== 'undefined') {
        //     isValid = this.props.location.isValidUser;
        //     console.log("ItemPage isValid " + isValid);
        // }



        //console.log(this.props.location);
        
        var data = getState("currentItem");
        //if (typeof (this.props.location.itemIndex) !== 'undefined') {
        //    data = this.props.location.itemIndex;
        //}



        //console.log("PROPS IS: " + this.props.location.itemIndex);

        return (
            <div className="root">
                {this.renderNavbar()}
                <Paper className="paper">
                    
                        <Grid item container direction="row" justify="space-evenly" className="item">
                            <Grid item className="imageWrapper">
                            <ButtonBase className="image">
                                <img className="img" alt="logo" src={image} />
                            </ButtonBase>
                            </Grid>
                            <Grid item className="info" direction="column">
                                <Grid item direction="column">
                                    <Typography gutterBottom variant="header" className="name">
                                        {getState("currentItem").name}
                                    </Typography>
                                    <Grid item className="city">
                                    {getState("currentItem").location}
                                    </Grid>
                                    <Grid item className="description">
                                    {getState("currentItem").description}
                                    </Grid>
                                    <Grid item className="price">
                                    ${getState("currentItem").price}/{getState("currentItem").duration}
                                    </Grid>
                                    
                                </Grid>
                                <Grid item className="rent">
                                    {/* <Link
                                        to={{
                                            pathname: "./profile",
                                            data: data,
                                            //isValidUser: isValid
                                        }}>
                                    Rent this item
                                    </Link> */}
                                     <button onClick={this.rentItem}> Rent this item </button>
                                </Grid>
                            </Grid>
                            <Grid item>
                                
                            </Grid>
                        </Grid>
						{/* <Link className="return"
						to={{
							pathname: "./",
							//validUser: isValid
                        
						}}> Return to Listings </Link> */}
                    <button onClick={this.goHome}>Return to Listings</button>
            
                    
                </Paper>
            </div>
        );
    }
}
export default ItemPage;