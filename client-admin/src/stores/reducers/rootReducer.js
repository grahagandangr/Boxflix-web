import { combineReducers } from "redux";
import castReducer from "./castReducer";
import genreReducer from "./genreReducer";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
  cast: castReducer,
  user: userReducer,
});

export default rootReducer;
