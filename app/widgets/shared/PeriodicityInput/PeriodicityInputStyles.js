import { StyleSheet } from "react-native";

export const periodicityInputStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: "100%",
    marginTop: 5,
    marginBottom: 10,
  },
  weekWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  day: {
    borderWidth: 2,
    height: 45,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 3,
    width: 43,
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "white",
    color: "grey",
    fontSize: 16,
    justifyContent: "center",
    alignContent: "center",
  },
  selectedDay: {
    backgroundColor: "grey",
    color: "white",
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
  hasError: {
    borderColor: "red",
    color: "red",
  },
});
