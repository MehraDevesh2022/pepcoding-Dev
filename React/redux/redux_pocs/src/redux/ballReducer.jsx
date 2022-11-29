let inititalState = {
  balls: 10,
};
// when state is not passed (empty) then intialState used ->10
function ballReducer(state = inititalState, action) {
  switch (action.type) {
    case "increment":
      return {
        balls : state.balls + 1
      }
      break;
    case "decrement":
      return{
        balls : state.balls - 1
    }
      break;

    default:
      return state; // this one is intital value one state asinged with inititalState
  }
}
export default ballReducer;
