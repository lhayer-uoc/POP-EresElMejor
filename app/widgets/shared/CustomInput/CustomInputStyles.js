import { StyleSheet } from "react-native";

export const customInputStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: "100%",
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 3,
    width: "100%",
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "white",
    display: "flex",
    maxWidth: "100%",
    color: "black",
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  error: {
    marginTop: 5,
  },
  hasError: {
    borderColor: "red",
    color: "red",
  },
});
