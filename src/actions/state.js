import axios from "axios";

export const getState = () => {
  return dispatch => {
    dispatch({
      type: "GET_NAME"
    });

    let url = "https://hrtaskapi.dhwaniris.in/index.php/api/master/get-state";
    axios
    .get(url)
      .then(response => {
        dispatch({
          type: "GET_STATE_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "GET_STATE_ERROR",
          error
        });
      });
  };
};
