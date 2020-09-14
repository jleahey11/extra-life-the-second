import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Rules from '../../components/Smash/Rules';
import Participation from '../../components/Smash/Participation';
import Roster from '../../components/Smash/Roster';

const SmashTournamentPage = props => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography align="center" variant="h2">Smash Bros Ultimate Tournament</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Rules />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Participation />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Roster />
            </Grid>
        </Grid>
    )
};

export default SmashTournamentPage;
