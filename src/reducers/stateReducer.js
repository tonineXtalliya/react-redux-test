const initialState={
    states : [],
}
export function unsplashReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    
    case "GET_NAME":
      return newState;
    case "GET_STATE_SUCCESS":
      newState.states = { ...action.data };
    default:
      return newState;
  }
}
