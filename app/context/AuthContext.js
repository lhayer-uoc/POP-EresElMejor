import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth } from "../config/db";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import dbUserToDto from "./dto/dbUserToDto";

export const authInitialState = {
  isLoggedIn: false,
  userData: undefined,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [authState, setAuthState] = useState(authInitialState);
  const navigation = useNavigation();

  const Login = async (email, password) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);

      if (!authState.userData) {
        setAuthState(dbUserToDto(auth.currentUser));
      }
      navigation.dispatch(StackActions.replace("AppRoutes"));
    } catch (error) {
      showMessage({
        message: "Tu email y/o password no son correctos",
        type: "danger",
      });
      console.log("error: ", error);
    }
    setIsLoading(false);
  };

  const Register = async (formData) => {
    setIsLoading(true);
    try {
      const registerResponse = await createUserWithEmailAndPassword(
        auth,
        formData.email.value,
        formData.password.value
      );
      await UpdateUserProfile(registerResponse.user, {
        displayName: formData.name.value,
      });

      const isLogged = auth.currentUser;
      if (isLogged) {
        setAuthState(() => ({
          isLoggedIn: true,
          userData: {
            name: isLogged.displayName,
            email: isLogged.email,
          },
        }));
        navigation.dispatch(StackActions.replace("AppRoutes"));
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      showMessage({
        message: "Ha ocurrido un error, vuelve a intentarlo",
        type: "danger",
      });
      console.log("error: ", error);
    }
    setIsLoading(false);
  };

  const UpdateUserProfile = async (userData) => {
    const profileData = {};
    for (let field in userData) {
      profileData[field] = userData[field].value;
    }
    setIsLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: profileData.name,
      });
      await updateEmail(auth.currentUser, profileData.email);
      setAuthState(() => ({
        isLoggedIn: true,
        userData: {
          ...profileData,
        },
      }));
      showMessage({
        message: "Tus cambios se han guardado",
        type: "success",
      });
    } catch (error) {
      console.log("error: ", error);
    }
    setIsLoading(false);
  };

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) {
      navigation.navigate("Login");
      return;
    }
    navigation.dispatch(StackActions.replace("AppRoutes"));
  });

  useEffect(() => {
    return unsubscribe;
  });

  return (
    <AuthContext.Provider
      value={{
        authState,
        Login,
        Register,
        UpdateUserProfile,
        isLoading,
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
