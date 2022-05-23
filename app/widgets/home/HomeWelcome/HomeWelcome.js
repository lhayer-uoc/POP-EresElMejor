import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { loadImageFromGallery } from "app/utils/imageUtil";

import { styleHomeWelcome } from "./HomeWelcomeStyles";
import { useAuth } from "../../../context/AuthContext";
import { showMessage } from "react-native-flash-message";

export const HomeWelcome = ({ name }) => {
  const { authState, UpdateAvatar } = useAuth();

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

  return (
    <View>
      <Avatar
        rounded
        size={100}
        containerStyle={styleHomeWelcome.avatar}
        source={{ uri: authState.userData?.avatar }}
        onPress={changeAvatar}
      />
      <Text style={styleHomeWelcome.title}>Hola, {name}</Text>
      <Text style={styleHomeWelcome.subtitle}>Eres el mejor</Text>
    </View>
  );
};
