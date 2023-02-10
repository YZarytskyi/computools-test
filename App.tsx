import React from "react";
import Navigation from "./src/components/Navigation/Navigation";
import Login from "./src/screens/Login";
import { useAppSelector } from "./src/store/hooks";

const App = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return isAuth ? <Navigation /> : <Login />;
};

export default App;
