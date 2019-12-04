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


	

export default function ComplexGrid() {

    const classes = useStyles();
    
	let searchLocation = getState("homeFiltered").location
	let searchName = getState("homeFiltered").name
	
	console.log(searchLocation)
	console.log(searchName)
    const items = [];
    for (let index = 0; index < getState("itemList").length; index++) {
		if (searchLocation == ""){
			if (getState("itemList")[index].name == searchName){
				items.push(singleItem(classes, index));
			}
		}
		else if (searchName == ""){
			if (getState("itemList")[index].location == searchLocation){
				items.push(singleItem(classes, index));
			}
		}
		else {
			if (getState("itemList")[index].location == searchLocation && getState("itemList")[index].name == searchName){
				items.push(singleItem(classes, index));
			}
		}
    }
    
	
	console.log(items);

    return (
        <div>
            {wrapper(classes, items)}
        </div>
    );
}

function getItem(index) {
    setState("currentItem", getState("itemList")[index]);
    setState("currentView", "Item");
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

                                   
                                    <button value={index} onClick={() => getItem(index)}>Rent this Item</button>
                                     
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

