import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "../widgets/shared/Login";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Site = ({ route }) => {
  const { site } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Login mensaje="Apretar para LogIn" />
      <Text style={styles.title} onPress={() => navigation.goBack()}>
        {site}
      </Text>
      <Text style={styles.location}>Location</Text>
    </View>
  );
};

export default Site;
