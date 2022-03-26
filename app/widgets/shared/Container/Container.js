import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { containerStyles } from "./ContainerStyles";

const Container = ({ children, negativeSpacing = true }) => {
  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        containerStyles.container,
        negativeSpacing ? containerStyles.containerNegativeSpace : "",
      ]}
    >
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
