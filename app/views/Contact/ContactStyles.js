import { StyleSheet } from "react-native";

export const contactStyles = StyleSheet.create({
  container: {
    marginVertical: '30%',
    flex:1,
    width:400,
    height:200,
  },
  input:{
    borderWidth:2,
    marginVertical:5,
    marginHorizontal:30,
    height:45,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  textInput:{
    fontSize: 15,
    height: 25,
    marginHorizontal:35,
  },
  button:{
    alignItems:'center',
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    height: 55

  },
  textButton:{
    color: 'white',
    fontSize: 20,
  }
});
