import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

//hard coded pictures of products (will need to change for phase 2)
import bike from '../bike.jpg';
import snowblower from '../snowblower.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        background: 'beige',
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
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="logo" src={bike} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="header">
                                    Children's Bicycle
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Markham, ON
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Brand new, my son uses it and he's eight, so I can guarantee that it's good for eight-year-olds
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    See item
                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$8.00/day</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="logo" src={snowblower} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="header">
                                    Snow Blower
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Mississauga, ON
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    This heavy duty snow blower powered by a 11 HP 120 Volt electric 
                                    start engine transforms banks of snow into a clear path in a single pass. 
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    See item
                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$20.00/day</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}