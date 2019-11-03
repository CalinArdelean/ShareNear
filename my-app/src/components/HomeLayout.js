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


/* Component that makes a grid of the product listings to put on the home page */

//hard coded pictures and listings of products (will need to change for phase 2)
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
        price: "15.00", location: "Markham, ON", seller: "Bob Anderson", address: "123 Fake St"
    },
    {
        id: 1, image: chainsaw, name: "Chainsaw", description: "15-inch petrol chainsaw.", price: "11.00", 
        location: "Mississauga, ON", seller: "Andrew Matheson", address: "123 Street Rd"
    },
    {
        id: 2, image: snowblower, name: "Snow Blower", description: "This heavy duty snow blower powered by a 11 HP 120 Volt electric start engine transforms banks of snow into a clear path in a single pass.",
        price: "20.00", location: "Toronto, ON", seller: "Matthew Anderson", address: "123 Real Place St"
    },
    {
        id: 3, image: ps4, name: "Playstation 4", description: "Comes with the new Spiderman and God of War!",
        price: "14.00", location: "Toronto, ON", seller: "Matthew Andrews", address: "123 False Blvd"
    },
    {
        id: 4, image: airpods, name: "Air Pods", description: "You have to experience this.",
        price: "8.00", location: "North York, ON", seller: "Andrew Matthews", address: "123 Placeholder Lane"
    },
    {
        id: 5, image: trampoline, name: "Trampoline", description: "5 meters in diameter.",
        price: "35.00", location: "Toronto, ON", seller: "Johnny Johnston", address: "85 Building Place"
    },
    {
        id: 6, image: apartment, name: "Apartment for Rent", description: "Two-bedroom apartment for rent. $40.00 per person per night. Check out is at noon.",
        price: "40.00", location: "Thornhill, ON", seller: "Jimmy Stevens", address: "111 Location Ave"
    },
    {
        id: 7, image: oculus, name: "Oculus Quest", description: "Quest headset and controllers with a bunch of games downloaded.",
        price: "20.00", location: "Toronto, ON", seller: "Jacob Jacobson", address: "123 House St"
    },
    {
        id: 8, image: porsche, name: "Porshe Rental", description: "2016 dark gray Porsche.",
        price: "230.00", location: "Toronto, ON", seller: "Paul Blart", address: "123 Boulevard Ave"
    }
]

var images = [bike, chainsaw, snowblower, ps4, airpods, trampoline, apartment, oculus, porsche];
var names = ['Children\'s Bicycle', 'Chainsaw', 'Snow Blower', 'PlayStation 4', 'Air Pods', 'Trampoline', 'Apartment for Rent', 'Oculus Quest', 'Porsche Rental'];
var descriptions = ['Brand new, my son uses it and he\'s eight, so I can guarantee that it\'s good for eight - year - olds.',
    '15-inch petrol chainsaw.',
    'This heavy duty snow blower powered by a 11 HP 120 Volt electric start engine transforms banks of snow into a clear path in a single pass.',
    'Comes with the new Spiderman and God of War!', 'You have to experience this.', '5 meters in diameter.', 'Two-bedroom apartment for rent. $40.00 per person per night. Check out is at noon.', 'Quest headset and controllers with a bunch of games downloaded.', '2016 dark gray Porsche.'];
var prices = ['15.00', '11.00', '20.00', '14.00', '8.00', '35.00', '40.00', '20.00', '230.00'];
var cities = ['Markham, ON', 'Mississauga, ON', 'Toronto, ON', 'Toronto, ON', 'North York, ON', 'Toronto, ON', 'Thornhill, ON', 'Toronto, ON', 'Toronto, ON'];

var numCols = 12;

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
        background: 'beige',
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


    const items = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < numCols; j++) {

    

            //if (j % numCols == 0) {
             //   items.push(singleItem(classes));
            //}
            items.push(singleItem(classes, index));
            //if (j % numCols == numCols - 1) {
             //   items.push(singleItem(classes));
            //}
            index++;
        }
    }

    return (
        <div>
            {wrapper(classes, items)}
        </div>
    );
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
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="logo" src={images[index]} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs >
                                <Typography gutterBottom variant="header">
                                    {names[index]}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {cities[index]}
                                </Typography>
                                <Dotdotdot clamp={3}>
                                    <Typography variant="body2" color="textSecondary">
                                        {descriptions[index]}
                                    </Typography>
                                </Dotdotdot>
                                
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }} >

                                    <Link
                                        to={{
                                            pathname: "./item",
                                            itemIndex: index
                                        }}>
                                        Rent this item
                                    </Link>

                                     
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${prices[index]}/day</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}










