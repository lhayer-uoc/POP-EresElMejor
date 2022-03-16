import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Login from "../widgets/shared/Login";
import SvgUri from "expo-svg-uri";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  form: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  description: {
    padding: 10,
    height: 40,
  },
  camera: {
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },
  photo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  save: {
    marginTop: "auto",
    backgroundColor: "#fc0",
    padding: 20,
  },
  saveButton: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
});

const NewSite = ({ route }) => {
  const navigation = useNavigation();
  const text = "Descripción...";

  return (
    <View style={styles.container}>
      <Login mensaje="Apretar para LogIn" />
      <View style={styles.form}>
        <View style={styles.description}>
          <Input placeholder={text} />
        </View>
        <View style={styles.camera}>
          <TouchableOpacity
            style={styles.photo}
            onPress={() => navigation.navigate("Camera")}
          >
            <SvgUri
              width="80"
              height="80"
              fill="#000"
              fillAll={true}
              source={require("../../assets/cil-camera.svg")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Button
            icon={<Icon name="save" size={15} color="white" />}
            title="Save"
            containerStyle={{
              width: "90%",
              marginVertical: "5%",
              marginLeft: "5%",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NewSite;
