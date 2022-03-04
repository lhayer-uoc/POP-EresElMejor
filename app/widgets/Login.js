import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cabecera: {
    backgroundColor: "#ffcc00",
    padding: 10,
    paddingTop: 35,
    width: "100%",
    height: 80,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "right",
  },
});
const Login = ({ mensaje }) => {
  const [logged, setLogged] = useState(false);

  return (
    <View style={styles.cabecera}>
      <Text onPress={() => setLogged(!logged)}>
        {!logged ? mensaje : "Usuario anonimo"}
      </Text>
    </View>
  );
};

export default Login;
