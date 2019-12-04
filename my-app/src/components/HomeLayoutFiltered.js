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

//hard coded pictures and listings of products (will need to change for phase 2)
import itemimage from '../assets/NewItem.png';
import bike from '../assets/bike.jpg';
import snowblower from '../assets/snowblower.jpg';
import chainsaw from '../assets/chainsaw.jpg';
import ps4 from '../assets/ps4.jpg';
import airpods from '../assets/airpods.jpg';
import trampoline from '../assets/trampoline.jpg';
import apartment from '../assets/apartment.jpg';
import oculus from '../assets/oculus.jpg';
import porsche from '../assets/porsche.jpg';
import { borderColor } from '@material-ui/system';
export var listings = [
    {
        id: 0, image: bike, name: "Children\'s Bicycle",
        description: "Brand new, my son uses it and he\'s eight, so I can guarantee that it\'s good for eight - year - olds.",
        price: "15.00", location: "Mississauga, ON", seller: "Paul Blart", address: "123 Placeholder Lane"
    },
    {
        id: 1, image: chainsaw, name: "Chainsaw", description: "15-inch petrol chainsaw.", price: "11.00", 
        location: "Toronto, ON", seller: "Jacob Jacobson", address: "123 Boulevard Ave"
    },
    {
        id: 2, image: snowblower, name: "Snow Blower", description: "This heavy duty snow blower powered by a 11 HP 120 Volt electric start engine transforms banks of snow into a clear path in a single pass.",
        price: "20.00", location: "Mississauga, ON", seller: "Paul Blart", address: "123 Placeholder Lane"
    },
    {
        id: 3, image: ps4, name: "Playstation 4", description: "Comes with the new Spiderman and God of War!",
        price: "14.00", location: "Mississauga, ON", seller: "Paul Blart", address: "123 Placeholder Lane"
    },
    {
        id: 4, image: airpods, name: "Air Pods", description: "You have to experience this.",
        price: "8.00", location: "Toronto, ON", seller: "Jacob Jacobson", address: "123 Boulevard Ave"
    },
    {
        id: 5, image: trampoline, name: "Trampoline", description: "5 meters in diameter.",
        price: "35.00", location: "Mississauga, ON", seller: "Paul Blart", address: "123 Placeholder Lane"
    },
    {
        id: 6, image: apartment, name: "Apartment for Rent", description: "Two-bedroom apartment for rent. $40.00 per person per night. Check out is at noon.",
        price: "40.00", location: "Toronto, ON", seller: "Jacob Jacobson", address: "123 Boulevard Ave"
    },
    {
        id: 7, image: oculus, name: "Oculus Quest", description: "Quest headset and controllers with a bunch of games downloaded.",
        price: "20.00", location: "Toronto, ON", seller: "Jacob Jacobson", address: "123 Boulevard Ave"
    },
    {
        id: 8, image: porsche, name: "Porshe Rental", description: "2016 dark gray Porsche.",
        price: "230.00", location: "Toronto, ON", seller: "Jacob Jacobson", address: "123 Boulevard Ave"
    }
]

var numCols = 3;

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
                            <Typography variant="subtitle1">${getState('itemList')[index].price}/{getState('itemList')[0].duration}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

