import { BASE_URL, FETCH_GENRES, ADD_GENRES, EDIT_GENRES, DELETE_GENRES } from "./actionType";

export const fetchGenresAction = (payload) => {
  return {
    type: FETCH_GENRES,
    payload,
  };
};

export const addGenresAction = (payload) => {
  return {
    type: ADD_GENRES,
    payload,
  };
};

export const editGenresAction = (payload) => {
  return {
    type: EDIT_GENRES,
    payload,
  };
};

export const deleteGenresAction = (payload) => {
  return {
    type: DELETE_GENRES,
    payload,
  };
};

export const fetchGenres = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/genres`, {
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
        dispatch(fetchGenresAction(data));
      });
  };
};

export const addGenre = (bodyToAdd) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/genres`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(bodyToAdd),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(addGenresAction(bodyToAdd));
        return data;
      });
  };
};

export const editGenre = (bodyToEdit, id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/genres/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(bodyToEdit),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(editGenresAction(bodyToEdit));
        return data;
      });
  };
};

export const deleteGenre = (id) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/genres/${id}`, {
      method: "DELETE",
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
        dispatch(deleteGenresAction(data.data));
        return data;
      });
  };
};
