import { TournamentActions } from '../actions';

const initialState = {
    tournament: {},
    participants: [],
    matches: []
};

const tournament = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default tournament;
