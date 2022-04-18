import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Container from "widgets/shared/Container/Container";
import { View, Text } from "react-native";
import CustomButton from "app/widgets/shared/Button/CustomButton";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";
import { useForm } from "../../hooks/useForm";
import { emailValidation, emptyField } from "../../utils/formValidations";
import { loadImageFromGallery } from "app/utils/imageUtil";
import { registerStyles } from "./RegisterStyles";
import { Avatar } from "react-native-elements";

const Register = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState();

  const changeAvatar = async () => {
    //array como parametro las dimensiones de la imagen
    const result = await loadImageFromGallery([1, 1]);
    setImage(result.image);
  };
  const { email, password, name, onChange, onBlur, validForm } = useForm({
    email: {
      value: "",
      validation: [emailValidation],
    },
    password: {
      value: "",
      validation: [emptyField],
    },
    name: {
      value: "",
      validation: [emptyField],
    },
  });

  const navigateToHome = () => {
    navigation.getState();
    navigation.replace("AppRoutes");
  };

  return (
    <Container style={registerStyles.container} negativeSpacing={false}>
      <View style={registerStyles.view}>
        <View style={registerStyles.avatarWrapper}>
          <Avatar
            rounded
            size={100}
            containerStyle={registerStyles.avatar}
            source={{ uri: image }}
            onPress={changeAvatar}
          />
          <Text style={registerStyles.avatarLabel}>Añadir Foto</Text>
        </View>
        <CustomInput
          placeholder="Escribe tu nombre"
          label="Name"
          value={name.value}
          onChange={(value) => onChange(value, "name")}
          onBlur={() => onBlur("name")}
          error={name.errorMessage}
          labelAlign="center"
        />
        <CustomInput
          placeholder="Escribe tu email"
          label="Email"
          value={email.value}
          onChange={(value) => onChange(value, "email")}
          onBlur={() => onBlur("email")}
          error={email.errorMessage}
          labelAlign="center"
        />
        <CustomInput
          placeholder="Escribe tu password"
          label="Password"
          value={password.value}
          onChange={(value) => onChange(value, "password")}
          onBlur={() => onBlur("password")}
          error={password.errorMessage}
          labelAlign="center"
        />
        <CustomButton
          title={"Registrarme"}
          action={validForm ? navigateToHome : null}
          disable={!validForm}
          fullWidth
        />
        <CustomButton
          title={"Ya tengo usuario"}
          action={() => navigation.navigate("Login")}
          fullWidth
          theme="secondary"
        />
      </View>
    </Container>
  );
};
export default Register;
