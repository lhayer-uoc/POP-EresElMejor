import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../../../context/AuthContext";
import Login from "../../../views/Login/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuApp } from "./MenuApp";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppRoutes"
            component={MenuApp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

const Menu = () => {
  return <App />;
};

export default Menu;
