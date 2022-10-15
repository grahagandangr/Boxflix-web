import { BASE_URL, FETCH_MOVIES, FETCH_MOVIES_BY_ID } from "./actionType";

export const fetchMoviesAction = (payload) => {
  return {
    type: FETCH_MOVIES,
    payload,
  };
};

export const fetchMoviesByIdAction = (payload) => {
  return {
    type: FETCH_MOVIES_BY_ID,
    payload,
  };
};

export const fetchMovies = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/movies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchMoviesAction(data));
      });
  };
};

export const fetchMoviesById = (id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchMoviesByIdAction(data));
      });
  };
};
