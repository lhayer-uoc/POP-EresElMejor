import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const styles = StyleSheet.create({
  cabecera: {
    backgroundColor: "#ffcc00",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
    margin: 0,
    height: 0,
  },
});
const Login = ({ mensaje }) => {
  const [logged, setLogged] = useState(false);

  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff",
      }}
      centerComponent={<LoginHeader logged={logged} msg="ferran" />}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
};

const LoginHeader = ({ logged, msg }) => {
  const text = logged ? "Usuario anónimo" : msg;

  return <Text>{text}</Text>;
};

export default Login;
