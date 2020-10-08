import { TournamentActions } from '../actions';

const initialState = {
  tournament: {},
  participants: [],
  matches: []
};

const tournament = (state = initialState, action) => {
  switch(action.type) {
    case TournamentActions.FETCH_TOURNAMENT_FAILURE:
      console.log(action);
      return state;
    case TournamentActions.FETCH_TOURNAMENT_SUCCESS:
      console.log(action);
      state.tournament = action.tournament;
      return state;
    default:
      return state;
  }
};

export default tournament;
