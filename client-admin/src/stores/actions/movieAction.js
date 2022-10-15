import { ADD_MOVIES, BASE_URL, DELETE_MOVIES, EDIT_MOVIES, FETCH_MOVIES, FETCH_MOVIE_BY_ID } from "./actionType";

export const fetchMoviesAction = (payload) => {
  return {
    type: FETCH_MOVIES,
    payload,
  };
};

export const fetchMovieByIdAction = (payload) => {
  return {
    type: FETCH_MOVIE_BY_ID,
    payload,
  };
};

export const addMoviesAction = (payload) => {
  return {
    type: ADD_MOVIES,
    payload,
  };
};

export const editMoviesAction = (payload) => {
  return {
    type: EDIT_MOVIES,
    payload,
  };
};

export const deleteMoviesAction = (payload) => {
  return {
    type: DELETE_MOVIES,
    payload,
  };
};

export const fetchMovies = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
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

export const fetchMovieById = (id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchMovieByIdAction(data));
      });
  };
};

export const addMovies = (bodyToAdd) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: bodyToAdd,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        dispatch(addMoviesAction(bodyToAdd));
        return data;
      });
  };
};

export const editMovies = (bodyToEdit, id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: bodyToEdit,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        dispatch(editMoviesAction(bodyToEdit));
        return data;
      });
  };
};

export const deleteMovies = (id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        dispatch(deleteMoviesAction(data.data));
        return data;
      });
  };
};
