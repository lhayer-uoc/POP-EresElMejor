import { useNavigation } from "@react-navigation/native";
import React from "react";
import Container from "widgets/shared/Container/Container";
import { Text, View, TextInput } from "react-native";
import CustomButton from "app/widgets/shared/Button/CustomButton";

import { loginStyles } from "./LoginStyles";

const Login = () => {
  const navigation = useNavigation();
  console.log("navigation: ", navigation.getState());

  const navigateToHome = () => {
    navigation.getState();
    navigation.replace("AppRoutes");
  };

  return (
    <Container style={loginStyles.container} negativeSpacing={false}>
      <View style={loginStyles.view}>
        <Text>Login</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <CustomButton title={"Acceder"} action={navigateToHome} />
      </View>
    </Container>
  );
};
export default Login;
