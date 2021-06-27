import React from "react";
import SideBar from "./components/common/sidebar/SideBar";
import generateStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <SideBar />
      {/* <LogIn /> */}
    </Provider>
  );
}

export default App;
