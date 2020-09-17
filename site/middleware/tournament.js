import { createAction } from 'redux-api-middleware';

import { TournamentActions } from '../actions';

const actionAllowList = [
  TournamentActions.GET_TOURNAMENT,
  TournamentActions.GET_TOURNAMENT_MATCHES,
  TournamentActions.GET_TOURNAMENT_PARTICIPANTS
];

