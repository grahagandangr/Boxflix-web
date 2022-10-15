import { ADD_MOVIES, EDIT_MOVIES, FETCH_MOVIES, DELETE_MOVIES, FETCH_MOVIE_BY_ID } from "../actions/actionType";

const initialState = {
  movies: [],
  movie: {},
  updateMovie: [],
  deleteMovie: [],
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case FETCH_MOVIE_BY_ID:
      return { ...state, movie: action.payload };
    case ADD_MOVIES:
      return { ...state, movies: [...state.movies, action.payload] };
    case EDIT_MOVIES:
      return { ...state, updateMovie: action.payload };
    case DELETE_MOVIES:
      return { ...state, deleteMovie: action.payload };
    default:
      return state;
  }
}

export default movieReducer;
