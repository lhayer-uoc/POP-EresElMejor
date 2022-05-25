import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { loadImageFromGallery } from "app/utils/imageUtil";
import { View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import Container from "widgets/shared/Container/Container";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { emailValidation, emptyField } from "../../utils/formValidations";
import CustomButton from "../../widgets/shared/Button/CustomButton";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";
import { profileStyles } from "./ProfileStyles";
import { showMessage } from "react-native-flash-message";

const Profile = () => {
  const { authState, isLoading, UpdateUserProfile, Logout, UpdateAvatar } =
    useAuth();
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

  const changeAvatar = async () => {
    try {
      const imageResponse = await loadImageFromGallery([1, 1]);
      await UpdateAvatar(imageResponse.image);
      showMessage({
        message: "Tus Avatar se ha guardado",
        type: "success",
      });
    } catch (error) {
      console.log("error: ", error);
      showMessage({
        message: "No se ha podido actualizar tu imagen, vuelve a intentarlo",
        type: "error",
      });
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
        <View style={profileStyles.avatar}>
          <Avatar
            rounded
            size={100}
            source={{ uri: authState.userData?.avatar }}
            onPress={changeAvatar}
          />
        </View>
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
        <CustomButton
          style={profileStyles.logoutButton}
          title={"Cerrar sesión"}
          action={Logout}
          fullWidth
          theme="secondary_outline"
        />
      </View>
    </Container>
  );
};

export default Profile;
