import React from "react";
import { NativeBaseProvider, Box } from "native-base";

import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./screens/Home";
import StartPage from "./screens/StartPage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const stack = createStackNavigator();

  const bottom_tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="StartPage" component={StartPage} />
          <stack.Screen name="Home" component={Home} />
        </stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
