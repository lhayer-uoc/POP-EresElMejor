import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { containerStyles } from "./ContainerStyles";

const Container = ({ children }) => {
  return (
    <SafeAreaView edges={["top"]} style={containerStyles.container}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
