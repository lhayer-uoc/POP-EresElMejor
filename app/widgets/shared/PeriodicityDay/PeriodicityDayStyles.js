import { StyleSheet } from "react-native";

export const periodicityDayStyles = StyleSheet.create({
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
});
