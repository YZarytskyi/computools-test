import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileScreen from "../../screens/Profile/Profile";
import Icon from "react-native-vector-icons/AntDesign";
import HomeStack from "../HomeStack/HomeStack";

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "#303030" },
        }}
      >
        <Tab.Screen
          name="Feeds"
          component={HomeStack}
          options={{
            tabBarIconStyle: { width: "100%" },
            tabBarIcon: () => (
              <View style={styles.topContainer}>
                <Icon name="home" size={20} style={styles.icon} />
                <Text style={styles.topText}>FEEDS</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIconStyle: { width: "100%" },
            tabBarIcon: () => (
              <View style={styles.topContainer}>
                <Icon name="user" size={20} style={styles.icon} />
                <Text style={styles.topText}>PROFILE</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "white",
    marginRight: 5,
  },
  topText: {
    color: "white",
  },
});
