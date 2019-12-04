import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dotdotdot from 'react-dotdotdot';
import { Link } from 'react-router-dom';
import Item from './ItemPage';
import { getState, setState } from "statezero";


/* Component that makes a grid of the product listings to put on the home page */

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1500,

    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    item: {
        background: '#EAEAEA',
        width: 400,
        height: 180
    },
    description: {
        maxHeight: 10,
        color: "red"
    }
}));

//var isValid = 0;

export default function ComplexGrid() {

    const classes = useStyles();


    const items = [];
    //let index = 0;
    for (let index = 0; index < getState("itemList").length; index++) {
        items.push(singleItem(classes, index));
    }

    return (
        <div>
            {wrapper(classes, items)}
        </div>
    );
}

function getItem(index) {
    setState("currentItem", getState("itemList")[index])
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
            setState("renter", getState("currentUser"))

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
                        //setState("currentView", "Home")
                        return res.json();
                    }
                })
                .catch(error => {
                    console.log("we have failed");
                    console.log(error);
                });

            setState("currentView", "UserProfile");
        }).catch((error) => {
            console.log(error)
        });
}

function wrapper(classes, items) {

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    {items}

                </Grid>
            </Paper>
        </div>
    );
}


function singleItem(classes, index) {
    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs sm container spacing={12} className={classes.item}>
                    <img src={getState('itemList')[index].description.split(': ')[1]} height="100" width="100"></img>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs >
                                <Typography gutterBottom variant="header">
                                    {getState('itemList')[index].name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {getState('itemList')[index].location}
                                </Typography>
                                <Dotdotdot clamp={3}>
                                    <Typography variant="body2" color="textSecondary">
                                        {getState('itemList')[index].description}
                                    </Typography>
                                </Dotdotdot>

                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }} >

                                    <button value={index} onClick={() => getItem(index)}>Delete this Item</button>

                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${getState('itemList')[index].price}/{getState('itemList')[index].duration}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}










