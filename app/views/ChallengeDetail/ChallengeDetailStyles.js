import { StyleSheet } from "react-native";

export const challengeDetailStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  weekWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  periodicityDay: {
    marginRight: 10,
  },
  brief: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  circleProgressBar: {
    marginTop: 50,
  },
  challengeInfo: {
    marginTop: 50,
    width: "50%",
  },
  sectionTitle: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
  },
  containerIcon: {
    marginRight: 8,
    width: "10%",
    display: "flex",
    alignItems: "center",
  },
  containerIcon_icon: {
    width: 15,
  },
  inputContainer: {
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 20,
  },
  label: {
    fontWeight: "bold",
  },
});
