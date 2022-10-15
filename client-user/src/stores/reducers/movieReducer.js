import { FETCH_MOVIES, FETCH_MOVIES_BY_ID } from "../actions/actionType";

const initialState = {
  movies: [],
  movie: {},
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case FETCH_MOVIES_BY_ID:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
}

export default movieReducer;
