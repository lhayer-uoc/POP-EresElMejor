import { StyleSheet } from "react-native";

export const newChallengeStyles = StyleSheet.create({
    view:{
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
      text:{
        alignSelf: 'center',
        marginVertical: 20
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
        height: 55 ,
        justifyContent: 'center'
      },
      textButton:{
          fontSize: 15,
          color: 'white',
          alignSelf: 'center'
      }
})