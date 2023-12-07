import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  isLoggedIn: boolean;
  Email: string | null;
  Name: string | null; // New field for Name
  updateLoginState: (
    loggedIn: boolean,
    email?: string | null,
    name?: string | null
  ) => Promise<void>; // Update the function signature
}

const initialAuthContext: AuthContextType = {
  isLoggedIn: false,
  Email: null,
  Name: null, // Initialize Name as null
  updateLoginState: async () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Email, setEmail] = useState<string | null>(null);
  const [Name, setName] = useState<string | null>(null); // New state for Name

  useEffect(() => {
    loadLoginState();
  }, []);

  const loadLoginState = async () => {
    try {
      const userLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      const email = await AsyncStorage.getItem("Email");
      const name = await AsyncStorage.getItem("Name"); // Load Name from AsyncStorage

      if (userLoggedIn !== null && email !== null && name !== null) {
        setIsLoggedIn(JSON.parse(userLoggedIn));
        setEmail(email);
        setName(name); // Set the Name state
      }
    } catch (error) {
      console.error("Error loading login state:", error);
    }
  };

  const updateLoginState = async (
    loggedIn: boolean,
    email?: string | null,
    name?: string | null
  ) => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(loggedIn));
      setIsLoggedIn(loggedIn);

      if (email) {
        await AsyncStorage.setItem("Email", email);
        setEmail(email);
      } else {
        await AsyncStorage.removeItem("Email");
        setEmail(null);
      }

      if (name) {
        await AsyncStorage.setItem("Name", name); // Store Name in AsyncStorage
        setName(name); // Set the Name state
      } else {
        await AsyncStorage.removeItem("Name");
        setName(null);
      }
    } catch (error) {
      console.error("Error updating login state:", error);
    }
  };

  const authContextValue: AuthContextType = {
    isLoggedIn,
    Email,
    Name, // Include Name in the context value
    updateLoginState,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
