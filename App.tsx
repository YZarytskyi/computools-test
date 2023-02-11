import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/components/Navigation/Navigation";
import Login from "./src/screens/Login";
import { useAppSelector } from "./src/store/hooks";
import { store } from "./src/store/store";

AppRegistry.registerComponent("computools-test", () => App);

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return isAuth ? <Navigation /> : <Login />;
};

export default AppWrapper;
