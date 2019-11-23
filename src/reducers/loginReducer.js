const initialState={
    login : [],
}
export function unsplashReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "GET_PHOTOS":
      return newState;
    case "GET_PHOTOS_SUCCESS":
      newState.photos_data = action.data;
      return newState;
    case "GET_INFO":
      return newState;
    case "GET_INFO_SUCCESS":
      newState.login = { ...action.data };
    default:
      return newState;
  }
}
