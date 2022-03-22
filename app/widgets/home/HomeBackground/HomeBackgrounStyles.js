import { StyleSheet } from "react-native";

export const stylesHomeBackground = new StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fc0",
    height: "100%",
  },
  image: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#ccc",
  },
  button: {
    position: "absolute",
    padding: 10,
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    top: "50%",
    borderRadius: 100,
    left: "50%",
    transform: [{ translateX: -22 }, { translateY: -22 }],
    height: 45,
    width: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOverlay: {
    backgroundColor: "#fff",
    borderColor: "transparent",
  },
  plusIcon: {
    height: 10,
    width: 10,
  },
});
