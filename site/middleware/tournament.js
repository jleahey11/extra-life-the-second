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
    case TournamentActions.GET_TOURNAMENT_PARTICIPANTS:
      request = {
        endpoint: `${window.location}api/challonge/${action.tournamentId}/participants`,
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

  if (!!request) store.dispatch(createAction(request));
}

export default tournamentMiddleware;
