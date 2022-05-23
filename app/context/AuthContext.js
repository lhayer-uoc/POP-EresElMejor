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
import { showMessage } from "react-native-flash-message";
import dbUserToDto from "./dto/dbUserToDto";
import generatePushNotificationsToken from "../utils/notifications";
import { setUserExtraProfile } from "../services/setUserExtraProfile";
import { getExtraProfileService } from "../services/getExtraProfileService";

export const authInitialState = {
  isLoggedIn: false,
  userData: undefined,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [authState, setAuthState] = useState(authInitialState);
  const navigation = useNavigation();

  const goToHome = () => navigation.navigate("AppRoutes", { screen: "Home" });
  const goToLogin = () => navigation.navigate("Auth", { screen: "Login" });

  const Login = async (email, password) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      if (!authState.userData) {
        setAuthState(dbUserToDto({ id: auth.uid, ...auth.currentUser }));
      }
      goToHome();
    } catch (error) {
      showMessage({
        message: "Tu email y/o password no son correctos",
        type: "danger",
      });
      console.log("error: ", error);
    }
    setIsLoading(false);
  };

  const Logout = async () => {
    try {
      await auth.signOut();
      setAuthState(authInitialState);
      goToLogin();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const Register = async (formData) => {
    setIsLoading(true);
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        formData.email.value,
        formData.password.value
      );

      await UpdateUserProfile(formData);

      const token = await generatePushNotificationsToken();
      await setUserExtraProfile({ notificationToken: token }, createUser.user);

      const isLogged = auth.currentUser;
      if (isLogged) {
        setAuthState(dbUserToDto({ id: auth.uid, ...auth.currentUser }));
        goToHome();
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

  const UpdateUserProfile = async (formData) => {
    const profileData = {};
    for (let field in formData) {
      profileData[field] = formData[field]?.value;
    }

    setIsLoading(true);

    let updateData = {
      displayName: formData.name.value,
    };

    if (!!profileData?.avatar) {
      updateData["photoURL"] = profileData.avatar;
    }

    try {
      await updateProfile(auth.currentUser, {
        ...updateData,
      });

      await updateEmail(auth.currentUser, formData.email.value);

      setAuthState({
        ...authState,
        userData: {
          ...authState.userData,
          ...profileData,
        },
      });
      showMessage({
        message: "Tus cambios se han guardado",
        type: "success",
      });
    } catch (error) {
      console.log("error: ", error);
    }
    setIsLoading(false);
  };

  const UpdateAvatar = async (avatar) => {
    try {
      await updateProfile(auth.currentUser, {
        photoURL: avatar,
      });
      setAuthState({
        ...authState,
        userData: {
          ...authState.userData,
          avatar,
        },
      });
    } catch (error) {
      console.log("error: ", error);
      return false;
    }
  };

  const handleSetAuthState = async (user) => {
    const extraInfo = await getExtraProfileService(user);
    const data = { ...user, ...extraInfo };
    setAuthState(dbUserToDto(data));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        goToLogin();
        return;
      }
      goToHome();
      handleSetAuthState({ id: auth.uid, ...user });
    });
    unsubscribe();

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        Login,
        Register,
        UpdateUserProfile,
        UpdateAvatar,
        Logout,
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
