import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";

const { Navigator, Screen } = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="Login" component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
export default App;
