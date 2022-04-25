import { StyleSheet } from "react-native";

export const newChallengeStyles = StyleSheet.create({

  container: {
    marginHorizontal: 50,
    justifyContent: 'center',
    paddingBottom: "60%"
  },
  image: {
    width: "100%",
    height: "30%"
  },
  text: {
    alignSelf: 'center',
    marginVertical: 20
  },
  textInput: {
    fontSize: 15,
    height: 25,
    marginHorizontal: 35,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    height: 55,
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  }
})