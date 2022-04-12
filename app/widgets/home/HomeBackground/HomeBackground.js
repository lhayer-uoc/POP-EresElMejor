import React, { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { loadImageFromGallery } from "app/utils/imageUtil";
import { stylesHomeBackground } from "./HomeBackgrounStyles";
import PlusIcon from "assets/plus.svg";

export const HomeBackground = () => {
  const [image, setImage] = useState();

  const changeBackGround = async () => {
    //array como parametro las dimensiones de la imagen
    const result = await loadImageFromGallery([1, 1]);
    setImage(result.image);
  };

  return (
    <View style={stylesHomeBackground.container}>
      <Image source={{ uri: image }} style={stylesHomeBackground.image} />
      <TouchableOpacity
        style={[
          stylesHomeBackground.button,
          image ? stylesHomeBackground.buttonOverlay : "",
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
