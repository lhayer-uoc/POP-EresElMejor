import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "../widgets/Login";
import Menu from "../widgets/Menu";

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
