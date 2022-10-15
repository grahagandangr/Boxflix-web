import { FETCH_GENRES, ADD_GENRES, EDIT_GENRES, DELETE_GENRES } from "../actions/actionType";

const initialState = {
  genres: [],
  updateGenre: [],
  deleteGenre: [],
};

function genreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRES:
      return { ...state, genres: action.payload };
    case ADD_GENRES:
      return { ...state, genres: [...state.genres, action.payload] };
    case EDIT_GENRES:
      return { ...state, updateGenre: action.payload };
    case DELETE_GENRES:
      return { ...state, deleteGenre: action.payload };
    default:
      return state;
  }
}

export default genreReducer;
