import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

import BackArrow from "assets/backArrow.svg";

export const headerStyles = StyleSheet.create({
  backButton: {
    width: 50,
    marginLeft: 20,
  },
  homeButton: {
    marginRight: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export const commonHeader = (navigation, route, backScreen = "Home") => {
  return {
    headerTitle: () => <Text style={headerStyles.title}>{route.name}</Text>,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate(backScreen)}
        style={headerStyles.backButton}
      >
        <BackArrow fill="#000" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={headerStyles.homeButton}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    ),
    headerTitleAlign: "center",
  };
};
