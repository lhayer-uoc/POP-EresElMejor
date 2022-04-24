import React, { useCallback } from "react";
import { Linking, View } from "react-native";
import qs from "qs";

import Container from "widgets/shared/Container/Container";
import CustomButton from "../../widgets/shared/Button/CustomButton";
import { useForm } from "../../hooks/useForm";
import { contactStyles } from "./ContactStyles";
import { emptyField } from "../../utils/formValidations";
import { useFocusEffect } from "@react-navigation/native";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";

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

  const { to, subject, body, onChange, onBlur, form, getFormParams } =
    useForm();

  useFocusEffect(() => {
    if (!form) {
      getFormParams({
        to: { value: "eresElMejor@ereselmejor.com" },
        subject: { value: "", validation: [emptyField] },
        body: { value: "", validation: [emptyField] },
      });
    }
  });

  return (
    <Container style={contactStyles.container}>
      <View style={contactStyles.view}>
        <CustomInput
          placeholder="Escribe el motivo de tu consulta"
          label="Motivo de la consulta"
          value={subject?.value}
          onChange={(value) => onChange(value, "subject")}
          onBlur={() => onBlur("subject")}
          error={subject?.errorMessage}
          labelAlign="center"
        />
        <CustomInput
          placeholder="Escribe aqui..."
          label="Escribe tu consulta"
          value={body?.value}
          onChange={(value) => onChange(value, "body")}
          onBlur={() => onBlur("body")}
          error={body?.errorMessage}
          labelAlign="center"
        />
        <CustomButton
          title="Envíar"
          style={contactStyles.button}
          action={() => {
            sendEmail(to.value, subject.value, body.value);
          }}
        />
      </View>
    </Container>
  );
};

export default Contact;
