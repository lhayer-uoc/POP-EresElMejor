import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import Container from "widgets/shared/Container/Container";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { emailValidation, emptyField } from "../../utils/formValidations";
import CustomButton from "../../widgets/shared/Button/CustomButton";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";
import { profileStyles } from "./ProfileStyles";

const Profile = () => {
  const { authState, isLoading, UpdateUserProfile } = useAuth();
  const {
    email,
    name,
    onChange,
    onBlur,
    validForm,
    getFormData,
    getFormParams,
    form,
  } = useForm();

  const handleUpdateUserData = async () => {
    try {
      await UpdateUserProfile({ ...getFormData() });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useFocusEffect(() => {
    if (!form) {
      getFormParams({
        email: {
          value: authState?.userData?.email,
          validation: [emailValidation],
          isValid: true,
        },
        name: {
          value: authState?.userData?.name,
          validation: [emptyField],
          isValid: true,
        },
      });
    }
  });

  return (
    <Container>
      <View style={profileStyles.view}>
        {/* <View>
          <Avatar
            rounded
            size={100}
            containerStyle={profileStyles.avatar}
            source={{ uri: image }}
            onPress={changeAvatar}
          />
          <Text style={profileStyles.avatarLabel}>Añadir Foto</Text>
        </View> */}
        <CustomInput
          placeholder="Escribe tu nombre"
          label="Name"
          value={name?.value}
          onChange={(value) => onChange(value, "name")}
          onBlur={() => onBlur("name")}
          error={name?.errorMessage}
          labelAlign="center"
        />
        <CustomInput
          placeholder="Escribe tu email"
          label="Email"
          value={email?.value}
          onChange={(value) => onChange(value, "email")}
          onBlur={() => onBlur("email")}
          error={email?.errorMessage}
          labelAlign="center"
        />
        <CustomButton
          title={"Guardar"}
          action={validForm ? handleUpdateUserData : null}
          disable={!validForm}
          fullWidth
          loading={isLoading}
        />
      </View>
    </Container>
  );
};

export default Profile;
