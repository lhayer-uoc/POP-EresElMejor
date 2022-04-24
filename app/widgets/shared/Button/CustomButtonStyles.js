import { StyleSheet } from "react-native";

const commonText = {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "bold",
};

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
    ...commonText,
  },
  text_secondary_outline: {
    ...commonText,
    color: "#8E8E8E",
  },
  secondary: {
    backgroundColor: "#8E8E8E",
  },
  secondary_outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#8E8E8E",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  disable: {
    opacity: 0.5,
  },
  loadingIcon: {
    marginLeft: 10,
    color: "#fff",
  },
});
