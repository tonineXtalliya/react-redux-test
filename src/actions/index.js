import axios from "axios";

export const getUser = (username, password) => {
  return dispatch => {
    dispatch({
      type: "GET_INFO"
    });

    let url = "https://hrtaskapi.dhwaniris.in/index.php/api/user/login";

    var bodyFormData = new FormData();
    bodyFormData.set("username", username);
    bodyFormData.set("password", password);

    axios
      .post(url, bodyFormData)
      .then(response => {
        dispatch({
          type: "GET_INFO_SUCCESS",
          data: response.data
        });
        window.location.href="/home";
      })
      .catch(error => {
        dispatch({
          type: "GET_INFO_ERROR",
          error
        });
      });
  };
};
