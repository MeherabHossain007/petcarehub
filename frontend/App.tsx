import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./screens/Home";
import StartPage from "./screens/StartPage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";
import AdoptionPage from "./screens/AdoptionPage";

export default function App() {
  const stack = createStackNavigator();

  const bottom_tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="StartPage" component={StartPage} />
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="RegisterPage" component={RegisterPage} />
          <stack.Screen name="LoginPage" component={LoginPage} />
          <stack.Screen name="AdoptionPage" component={AdoptionPage} />
        </stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
