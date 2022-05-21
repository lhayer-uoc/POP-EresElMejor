import { StyleSheet } from "react-native";

export const challengeListStyles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
  },
  item: {
    marginVertical: 8,
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: "white",
    margin: 3,
  },
});
