import { BASE_URL, FETCH_GENRES } from "./actionType";

export const fetchGenresAction = (payload) => {
  return {
    type: FETCH_GENRES,
    payload,
  };
};

export const fetchGenres = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/genres`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchGenresAction(data));
      });
  };
};
