import { StyleSheet } from "react-native";

export const contactStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginVertical: "30%",
    width: "100%",
    display: "flex",
    paddingHorizontal: 40,
  },
  input: {
    borderWidth: 2,
    marginVertical: 5,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "100%",
    borderColor: "rgba(0,0,0,0.3)",
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    height: 25,
    marginHorizontal: 35,
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 15,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    width: "50%",
    height: 55,
  },
});
