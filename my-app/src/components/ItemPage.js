import React from 'react';
// import './Forms.css';
import placeholder from '../assets/chainsaw.jpg';

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

//import arrays

import { listings } from './HomeLayout';

class ItemPage extends React.Component {

    render() {

        var data = this.props.location.itemIndex;
        console.log("PROPS IS: " + this.props.location.itemIndex);

        return (
            <div className="root">
                <AppNavbar />
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
                                        }}>
                                    Rent this item
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item>
                                
                            </Grid>
                        </Grid>
                    
                </Paper>
            </div>
        );
    }
}
export default ItemPage;