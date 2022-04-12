import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


import {newChallengeStyles} from './NewChallengeStyles';

 
const NewChallenge = () => {
  
      return (
      
        <View style={newChallengeStyles.view}>
            <Text style={newChallengeStyles.text}>Nuevo Reto</Text>
            
            <Text style={newChallengeStyles.textInput} >Introduce el nombre del reto</Text>
            <TextInput 
            style={newChallengeStyles.input}
            
            />
            <Text style={newChallengeStyles.textInput} > Introduce una descripcion</Text>
            <TextInput 
            style={newChallengeStyles.input} 
            />     
           <TouchableOpacity style={newChallengeStyles.button}>
             <Text style={newChallengeStyles.textButton}> Guardar reto</Text>
           </TouchableOpacity>
        </View>
      
    
  )
}
export default NewChallenge;
