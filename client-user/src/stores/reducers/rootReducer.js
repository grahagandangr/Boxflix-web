import { combineReducers } from "redux";
import castReducer from "./castReducer";
import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
  cast: castReducer,
});

export default rootReducer;
