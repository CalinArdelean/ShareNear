import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
var images = [bike, chainsaw, snowblower, ps4, airpods, trampoline, apartment, oculus, porsche];
var names = ['Children\'s Bicycle', 'Chainsaw', 'Snow Blower', 'PlayStation 4', 'Air Pods', 'Trampoline', 'Apartment for Rent', 'Oculus Quest', 'Porsche Rental'];
var descriptions = ['Brand new, my son uses it and he\'s eight, so I can guarantee that it\'s good for eight - year - olds.',
    '15-inch petrol chainsaw.',
    'This heavy duty snow blower powered by a 11 HP 120 Volt electric start engine transforms banks of snow into a clear path in a single pass.',
    'Comes with the new Spiderman and God of War!', 'You have to experience this.', '5 meters in diameter.', 'Two-bedroom apartment for rent. $40.00 per person per night. Check out is at noon.', 'Quest headset and controllers with a bunch of games downloaded.', '2016 dark gray Porsche.'];
var prices = ['15.00', '11.00', '20.00', '14.00', '8.00', '35.00', '40.00', '20.00', '90.00'];
var cities = ['Markham, ON', 'Mississauga, ON', 'Toronto, ON', 'Toronto, ON', 'North York, ON', 'Toronto, ON', 'Thornhill, ON', 'Toronto, ON', 'Toronto, ON'];

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
    },
}));


export default function ComplexGrid() {
    
    const classes = useStyles();


    const items = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
        items.push(singleItem(classes, index));
        index += 3;
    }
    return (
        <div>
            {items}
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
                            <Grid item xs>
                                <Typography gutterBottom variant="header">
                                    {names[index]}
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {cities[index]}
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {descriptions[index]}
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    See item
                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${prices[index]}/day</Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs sm container spacing={12} className={classes.item}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="logo" src={images[index + 1]} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="header">
                                    {names[index+1]}
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {cities[index+1]}
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {descriptions[index+1]}
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    See item
                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${prices[index+1]}/day</Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs sm container spacing={12} className={classes.item}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="logo" src={images[index+2]} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="header">
                                    {names[index+2]}
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {cities[index+2]}
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {descriptions[index+2]}
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    See item
                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${prices[index+2]}/day</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}