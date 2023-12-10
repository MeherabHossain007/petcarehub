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
import Checkout from "./screens/Checkout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatScreen from "./screens/ChatScreen";

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
            <stack.Screen name="Checkout" component={Checkout} />
            <stack.Screen name="Chat" component={ChatScreen} />
          </stack.Navigator>
        </NavigationContainer>

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let iconColor;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home";
                  iconColor = focused ? "#FFB97D" : "#FFB97D";
                } else if (route.name === "AdoptionPage") {
                  iconName = focused ? "paw" : "paw";
                  iconColor = focused ? "#FFB97D" : "#FFB97D";
                } else if (route.name === "Dashboard") {
                  iconName = focused ? "user" : "user";
                  iconColor = focused ? "#FFB97D" : "#FFB97D";
                }

                // You can return any component that you like here!
                return (
                  <Box
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      padding: 10,
                    }}
                  >
                    <Icon
                      style={{ color: iconColor, fontSize: 30 }}
                      as={<AntDesign name={iconName} />}
                    />
                  </Box>
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: "#FFB97D",
              inactiveTintColor: "gray",
              showLabel: false,
              style: {
                backgroundColor: "#fff",
                borderTopWidth: 0,
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
              },
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="AdoptionPage" component={AdoptionPage} />


            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Dashboard" component={AdoptionPets} />
            <Tab.Screen name="Dashboard" component={RegisterPage} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Dashboard" component={PetDetails} />
            
            


          </Tab.Navigator>
          

        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
