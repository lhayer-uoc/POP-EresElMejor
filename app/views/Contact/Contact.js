import React from "react";
import { Linking, Text , TextInput, View, TouchableOpacity  } from "react-native";
import qs from 'qs';

import Container from "widgets/shared/Container/Container";
import { useForm } from "../../hooks/useForm";
import { contactStyles } from "./ContactStyles";



const Contact = () => {
 
  const {to, subject, body, onChange} = useForm( {
    to:'eresElMejor@ereselmejor.com',
    subject:'',
    body:''
  })

  return (
    <Container style={contactStyles.container}>
      
      <View style={contactStyles.container}>
        <Text style={contactStyles.textInput} > Haz tu consulta</Text>
        <TextInput 
          style={contactStyles.input}
          placeholder="eresElMejor@ereselmejor.com"
          editable={false}
          value={to}
          
        />
        <Text style={contactStyles.textInput} > Motivo de la consulta</Text>
        <TextInput 
          style={contactStyles.input}
          placeholder="Indica un motivo"
          onChangeText={ (value) => onChange(value, 'subject') }
          value={subject}
        />
        <Text style={contactStyles.textInput} > Escribe tu consulta</Text>
        <TextInput 
          style={contactStyles.input}
          placeholder="Escribe tu consulta"
          onChangeText={ (value) => onChange(value, 'body') }
          value={body}
          
        />
        <TouchableOpacity
          style={contactStyles.button}
          onPress={()=>{
            sendEmail(to, subject, body)
          }}
        >
        <Text style={contactStyles.textButton}>Send Email</Text>
        </TouchableOpacity>
       
      </View>
    </Container>
  );
};

export default Contact;


//FUNCION PARA MANDAR EMAIL
async function sendEmail( to, subject, body, options = {} ){
  const {cc, bcc}=options;
  let url = `mailto:${to}`;

  const query = qs.stringify({
    to:to,
    subject: subject,
    body:body,
    cc: cc,
    bcc: bcc
  })
  
  if (query.length){
    url += `?${query}`;
  }

//comprobar si funciona el link
const canOpen = await Linking.canOpenURL(url);
if(!canOpen){
  throw new Error('Provider URL can not be handled');
}
return Linking.openURL(url);
}

