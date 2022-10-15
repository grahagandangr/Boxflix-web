import { BASE_URL, FETCH_CASTS } from "./actionType";

export const fetchCastsAction = (payload) => {
  return {
    type: FETCH_CASTS,
    payload,
  };
};

export const fetchCasts = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/casts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchCastsAction(data));
      });
  };
};
