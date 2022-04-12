import React, { useCallback } from "react";
import { Linking, Text, TextInput, View, TouchableOpacity } from "react-native";
import qs from "qs";

import Container from "widgets/shared/Container/Container";
import CustomButton from "../../widgets/shared/Button/CustomButton";
import { useForm } from "../../hooks/useForm";
import { contactStyles } from "./ContactStyles";

const Contact = () => {
  //FUNCION PARA MANDAR EMAIL
  const sendEmail = useCallback(async (to, subject, body, options = {}) => {
    const { cc, bcc } = options;
    let url = `mailto:${to}`;

    const query = qs.stringify({
      to: to,
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc,
    });

    if (query.length) {
      url += `?${query}`;
    }

    //comprobar si funciona el link
    const canOpen = await Linking.canOpenURL(url);
    if (!canOpen) {
      throw new Error("Provider URL can not be handled");
    }
    Linking.openURL(url);
  }, []);

  const { to, subject, body, onChange } = useForm({
    to: "eresElMejor@ereselmejor.com",
    subject: "",
    body: "",
  });

  return (
    <Container style={contactStyles.container}>
      <View style={contactStyles.view}>
        <Text style={contactStyles.textInput}> Motivo de la consulta</Text>
        <TextInput
          style={contactStyles.input}
          placeholder="Indica un motivo"
          onChangeText={(value) => onChange(value, "subject")}
          value={subject}
        />
        <Text style={contactStyles.textInput}> Escribe tu consulta</Text>
        <TextInput
          style={contactStyles.input}
          placeholder="Escribe tu consulta"
          onChangeText={(value) => onChange(value, "body")}
          value={body}
        />
        <CustomButton
          title="Envíar"
          customStyles={contactStyles.button}
          action={() => {
            sendEmail(to, subject, body);
          }}
        />
      </View>
    </Container>
  );
};

export default Contact;
