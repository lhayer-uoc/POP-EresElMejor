import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth } from "../config/db";
import { useNavigation } from "@react-navigation/native";

export const authInitialState = {
  isLoggedIn: false,
  userData: undefined,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [authState, setAuthState] = useState(authInitialState);
  const navigation = useNavigation();

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const login = await createUserWithEmailAndPassword(email, password);
      setAuthState((oldState) => ({
        ...oldState,
        userData: {
          name: login.user.displayName,
          email: login.user.email,
        },
      }));
    } catch (error) {
      console.log("error: ", error);
    }
    setIsLoading(false);
  };

  const handleCheckIsLogged = async () => {
    const isLogged = auth.currentUser;
    if (isLogged) {
      setAuthState(() => ({
        isLoggedIn: true,
        userData: {
          name: isLogged.user.displayName,
          email: isLogged.user.email,
        },
      }));
    } else {
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    console.log(navigation.getState());
    if (!authState.userData) {
      handleCheckIsLogged();
    }
  }, [authState, navigation]);

  return (
    <AuthContext.Provider
      value={{
        authState,
        logIn: handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
