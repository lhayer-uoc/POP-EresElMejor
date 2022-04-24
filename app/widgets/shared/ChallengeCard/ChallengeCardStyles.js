import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "#ccc",
    position: "relative",
    padding: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  containerContent: {
    width: "85%",
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
  cardContent: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ebebeb",
  },
  rightColumn: {
    maxWidth: "60%",
    paddingLeft: 10,
  },
  arrowLink: {
    position: "absolute",
    top: "50%",
    right: 5,
    transform: [{ translateY: -15 }],
  },
});
