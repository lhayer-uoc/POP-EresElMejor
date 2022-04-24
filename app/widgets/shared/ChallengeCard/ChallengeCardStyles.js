import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "#EDEDED",
    padding: 10,
    position: "relative",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  rightColumn: {
    maxWidth: "60%",
    paddingLeft: 10,
  },
  arrowLink: {
    position: "absolute",
    top: "50%",
    right: 5,
    transform: [{ translateY: -5 }],
  },
  containerIcon:{
    marginRight: 8,
    maxWidth: "10%"
  },
});
