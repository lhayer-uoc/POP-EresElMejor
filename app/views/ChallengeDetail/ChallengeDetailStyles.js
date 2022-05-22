import { StyleSheet } from "react-native";

export const challengeDetailStyles = StyleSheet.create({
  wrapper: {
    marginTop: -20,
  },
  container: {
    marginTop: 20,
    marginBottom: "110%"
  },
  image:{
    alignSelf:'center', 
    height: "50%", 
    width: "100%",
    marginBottom: 20
  },
  contentDetails: {
    padding: 20,
  },
  hero: {
    backgroundColor: "white",
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
    justifyContent: "flex-start",
    padding: 20,
  },
  circleProgressBar: {
    marginTop: 50,
  },
  challengeInfo: {
    marginLeft: 20,
  },
  notifyButton: {},
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
