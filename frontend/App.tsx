import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
