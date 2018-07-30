import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/home";

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
}, {
    initialRouteName: 'Home',
    headerMode: "none"
  });