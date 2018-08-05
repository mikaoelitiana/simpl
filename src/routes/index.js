import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/home";
import DetailScreen from "../screens/workflow";

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
