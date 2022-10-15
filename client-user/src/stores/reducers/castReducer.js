import { FETCH_CASTS } from "../actions/actionType";

const initialState = {
  casts: [],
};

function castReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CASTS:
      return { ...state, casts: action.payload };
    default:
      return state;
  }
}

export default castReducer;
