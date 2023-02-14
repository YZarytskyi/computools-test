import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/Home';
import HomeDetailsScreen from '../../screens/HomeDetails/HomeDetails';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeDetailsScreen" component={HomeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
