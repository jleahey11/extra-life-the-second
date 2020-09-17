import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import Rules from '../../components/Smash/Rules';
import Participation from '../../components/Smash/Participation';
import Roster from '../../components/Smash/Roster';
import { TournamentActions } from '../../actions';

const tournamentId = "3e35s7fo";

const mapStateToProps = state => ({
  tournament = state.tournament.tournament,
});

const mapDispatchToProps = dispatch => ({
  getTournament: id => {
    dispatch(TournamentActions.getTournament(id));
  }
});

const SmashTournamentPage = ({ tournament, getTournament }) => {

  useEffect(() => {
    getTournament(tournamentId);
  }, []);

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
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SmashTournamentPage);
