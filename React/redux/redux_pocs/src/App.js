import React from "react";
// import Ball from "./component/Ball";
// import Ball2 from "./component/Ball2";
// import Bat from "./component/Bat";
// import Bat2 from "./component/Bat2";
import Ball from "./redux/Ball";
import {Provider} from "react-redux"
import store from "./store";
import Bat from "./redux/Bat";
function App() {
  return (
    // <>
    // <Ball></Ball>
    // <Ball2></Ball2>
    // <Bat></Bat>
    // <Bat2></Bat2>
    // </>
    <>
    {/* wraping Ball with provider and passed state value from store it will access by ball component using connect.provider and connect  provide by redux  */}
    <Provider store={store}>
        <Ball></Ball>
        <Bat></Bat>
    </Provider>
    </>
  );
}

export default App;
