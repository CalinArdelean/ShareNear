import React from 'react';
import '../App.css';

import AppNavbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dotdotdot from 'react-dotdotdot';
import { Link } from 'react-router-dom';
import AppNavbarLoggedIn from './NavbarLoggedIn';

//complex grid styles listed below
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

function ComplexGrid(item) {

    const classes = useStyles();


    const items = [];
        items.push(singleItem(classes, item));


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


function singleItem(classes, item) {

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs sm container spacing={12} className={classes.item}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="logo" src={item.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs >
                                <Typography gutterBottom variant="header">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {item.location}
                                </Typography>
                                <Dotdotdot clamp={3}>
                                    <Typography variant="body2" color="textSecondary">
                                        {item.description}
                                    </Typography>
                                </Dotdotdot>

                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }} >



                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${item.price}/day</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}


/* Component for user listings page */
class UserItems extends React.Component {
    render() {
        //will need to read from database to get all user listings
        //instead of just one listing
        this.props.location.state = this.props.location.data;
        console.log(this.props.location.state);
        const item = this.props.location.state;
            return (
                <div className="App">
                    <AppNavbarLoggedIn
                    />
                    <br></br>
                    <h3>Your Listings:</h3>
                    <br></br>
                    <ComplexGrid item={item}></ComplexGrid>
                    {/* <img
                        alt="item image"
                        src={item.image}
                        className="d-inline-block align-top"
                    ></img>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.location}</p> <br></br> */}
                </div>
            )
    }
}

export default UserItems;
