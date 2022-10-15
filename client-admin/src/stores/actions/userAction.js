import { ADD_USERS, BASE_URL, LOGIN_USERS } from "./actionType";

export const addUserAction = (payload) => {
  return {
    type: ADD_USERS,
    payload,
  };
};

export const loginUserAction = (payload) => {
  return {
    type: LOGIN_USERS,
    payload,
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/register-admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message);
          });
        }
        response.json();
      })
      .then(() => {
        dispatch(addUserAction(user));
      });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.user.username);
        dispatch(loginUserAction(true));
      });
  };
};
