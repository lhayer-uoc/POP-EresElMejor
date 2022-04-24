import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";
import Container from "widgets/shared/Container/Container";
import { View } from "react-native";
import CustomButton from "app/widgets/shared/Button/CustomButton";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";
import { useForm } from "../../hooks/useForm";
import { emailValidation, emptyField } from "../../utils/formValidations";
import PersonCircle from "assets/person-circle.svg";
import { loginStyles } from "./LoginStyles";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigation = useNavigation();
  const { Login, isLoading } = useAuth();
  const { email, password, onChange, onBlur, validForm, getFormParams, form } =
    useForm();

  const handleLogin = async () => {
    Login(email, password);
  };

  useFocusEffect(() => {
    if (!form) {
      getFormParams({
        email: {
          value: "",
          validation: [emailValidation],
        },
        password: {
          value: "",
          validation: [emptyField],
        },
      });
    }
  });

  return (
    <Container style={loginStyles.container} negativeSpacing={false}>
      <View style={loginStyles.view}>
        <View>
          <PersonCircle
            color="#000"
            width={80}
            height={80}
            style={loginStyles.userIcon}
          />
        </View>
        <CustomInput
          placeholder="Escribe tu email"
          label="Email"
          value={email?.value}
          onChange={(value) => onChange(value, "email")}
          onBlur={() => onBlur("email")}
          error={email?.errorMessage}
          labelAlign="center"
        />
        <CustomInput
          placeholder="Escribe tu password"
          label="Password"
          value={password?.value}
          onChange={(value) => onChange(value, "password")}
          onBlur={() => onBlur("password")}
          error={password?.errorMessage}
          labelAlign="center"
        />
        <CustomButton
          title={"Acceder"}
          action={validForm ? () => handleLogin(email, password) : null}
          disable={!validForm}
          fullWidth
        />
        <CustomButton
          title={"Quiero registrarme"}
          action={() => navigation.navigate("Register")}
          fullWidth
          theme="secondary"
          loading={isLoading}
        />
      </View>
    </Container>
  );
};
export default Login;
