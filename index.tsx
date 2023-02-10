import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./src/store/store";

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};