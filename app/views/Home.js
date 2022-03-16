import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "../widgets/shared/Login";
import Menu from "../widgets/shared/Menu";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Login mensaje="Apretar para LogIn" />
      <Menu />
    </View>
  );
};

export default Home;
