import React from "react";
import Container from "widgets/shared/Container/Container";
import { View } from "react-native";
import { splashScreenStyles } from "./SplashScreenStyles";
import Logo from "assets/logo.svg";

const SplashScreen = () => {
  return (
    <Container style={splashScreenStyles.container} negativeSpacing={false}>
      <View style={splashScreenStyles.view}>
        <Logo width="70%" height="50%" />
      </View>
    </Container>
  );
};
export default SplashScreen;
