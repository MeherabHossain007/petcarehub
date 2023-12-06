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
import Dashboard from "./screens/Dashboard";
import Details from "./screens/Details";

export default function App() {
  const stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Dashboard'>
          <stack.Screen name="StartPage" component={StartPage} />
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="RegisterPage" component={RegisterPage} />
          <stack.Screen name="LoginPage" component={LoginPage} />
          <stack.Screen name="AdoptionPage" component={AdoptionPage} />
          <stack.Screen name="Dashboard" component={Dashboard} />
          <stack.Screen name="Details" component={Details} />
        </stack.Navigator   
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
