const inititalState = {
  user: "",
  loading: true,
};

function asyncUserReducer(state = inititalState, action) {
  switch (action.type) {
    case "succes user":
      return {
        user: action.payload,
        loading: false,
      };
    default:
      return state; // when user in initial  state
  }
}
export default asyncUserReducer;
