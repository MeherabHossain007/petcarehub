import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./screens/Home";
import StartPage from "./screens/StartPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterPage from "./screens/auth/RegisterPage";
import LoginPage from "./screens/auth/LoginPage";
import AdoptionPage from "./screens/AdoptionPage";
import Dashboard from "./screens/Dashboard";
import Details from "./screens/Details";
import AdoptionForm from "./screens/AdoptionForm";
import AdoptionPets from "./screens/AdoptionPets";
import PetDetails from "./screens/PetDetails";
import AdoptContact from "./screens/AdoptContact";
import { AuthProvider } from "./providers/AuthProvider";
import AddPets from "./screens/AddPets";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="StartPage"
          >
            <stack.Screen name="StartPage" component={StartPage} />
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="RegisterPage" component={RegisterPage} />
            <stack.Screen name="LoginPage" component={LoginPage} />
            <stack.Screen name="AdoptionPage" component={AdoptionPage} />
            <stack.Screen name="Dashboard" component={Dashboard} />
            <stack.Screen name="Details" component={Details} />
            <stack.Screen name="AdoptionForm" component={AdoptionForm} />
            <stack.Screen name="AdoptionPets" component={AdoptionPets} />
            <stack.Screen name="PetDetails" component={PetDetails} />
            <stack.Screen name="AddPets" component={AddPets} />
            <stack.Screen name="AdoptContact" component={AdoptContact} />
          </stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
