import { FETCH_GENRES } from "../actions/actionType";

const initialState = {
  genres: [],
};

function genreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRES:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
}

export default genreReducer;
