import { createAction } from 'redux-api-middleware';

import { TournamentActions } from '../actions';

const actionAllowList = [
  TournamentActions.GET_TOURNAMENT,
  TournamentActions.GET_TOURNAMENT_MATCHES,
  TournamentActions.GET_TOURNAMENT_PARTICIPANTS
];

const tournamentMiddleware = (store) => (next) => (action) => {
  next(action);

  if (!actionAllowList.includes(action.type)) return;

  let request;

  switch(action.type) {
    case TournamentActions.GET_TOURNAMENT:
      request = {
        endpoint: `${window.location.host}/api/challonge/${action.id}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
          TournamentActions.FETCH_TOURNAMENT_REQUEST,
          TournamentActions.FETCH_TOURNAMENT_SUCCESS,
          TournamentActions.FETCH_TOURNAMENT_FAILURE
        ]
      };
      break;
    case TournamentActions.GET_TOURNAMENT_MATCHES:
      request = {
        endpoint: `${window.location.host}/api/challonge/${action.tournamentId}/matches`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
          TournamentActions.FETCH_TOURNAMENT_MATCHES_REQUEST,
          TournamentActions.FETCH_TOURNAMENT_MATCHES_SUCCESS,
          TournamentActions.FETCH_TOURNAMENT_MATCHES_FAILURE
        ]
      };
      break;
    case TournamentActions.GET_TOURNAMENT_PARTICIPANTS:
      request = {
        endpoint: `${window.location.host}/api/challonge/${action.tournamentId}/participants`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
          TournamentActions.FETCH_TOURNAMENT_PARTICIPANTS_REQUEST,
          TournamentActions.FETCH_TOURNAMENT_PARTICIPANTS_SUCCESS,
          TournamentActions.FETCH_TOURNAMENT_PARTICIPANTS_FAILURE
        ]
      };
      break;
    default:
      return;
  }

  console.log(request);
  if (!!request) store.dispatch(createAction(request));
}

export default tournamentMiddleware;
