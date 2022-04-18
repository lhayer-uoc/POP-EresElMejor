import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondary: {
    backgroundColor: "#8E8E8E",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  disable: {
    opacity: 0.5,
  },
});
