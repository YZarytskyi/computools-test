import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: "powderblue" },
          }}
        >
          <Tab.Screen name="Feeds" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
