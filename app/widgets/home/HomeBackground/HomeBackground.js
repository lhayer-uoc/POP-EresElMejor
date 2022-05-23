import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { loadImageFromGallery } from "app/utils/imageUtil";
import { stylesHomeBackground } from "./HomeBackgrounStyles";
import PlusIcon from "assets/plus.svg";
import { setBackgroundService } from "../../../services/setBackground";
import { useAuth } from "../../../context/AuthContext";

export const HomeBackground = () => {
  const { authState, UpdateBackground } = useAuth();

  const changeBackGround = async () => {
    try {
      const result = await loadImageFromGallery([1, 1]);
      const image = await setBackgroundService(
        result.image,
        authState.userData?.id
      );
      UpdateBackground(image);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <View style={stylesHomeBackground.container}>
      <Image
        source={{ uri: authState.userData?.background }}
        style={stylesHomeBackground.image}
      />
      <TouchableOpacity
        style={[
          stylesHomeBackground.button,
          authState.userData?.background
            ? stylesHomeBackground.buttonOverlay
            : "",
        ]}
        onPress={changeBackGround}
      >
        <PlusIcon
          fill="#000"
          style={stylesHomeBackground.plusIcon}
          width="100%"
          height="100%"
        />
      </TouchableOpacity>
    </View>
  );
};
