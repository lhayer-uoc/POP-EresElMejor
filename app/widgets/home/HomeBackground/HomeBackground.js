import React, { useState, useCallback } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { loadImageFromGallery } from "app/utils/imageUtil";
import { stylesHomeBackground } from "./HomeBackgrounStyles";
import PlusIcon from "assets/plus.svg";
import { setBackgroundService } from "../../../services/setBackground";
import { getBackgroundService } from "../../../services/getBackground";
import { useFocusEffect } from "@react-navigation/native";


export const HomeBackground = (user) => {

  const [image, setImage] = useState();
  const [userimage, setuserimage] = useState([""]);

  const changeBackGround = async () => {
    const result = await loadImageFromGallery([1, 1]);
    setImage(result.image);
    setBackgroundService(result.image, user.user);
  };

  const handleBackground = async () => {
    const userimage = await getBackgroundService(user.user);
    setuserimage(userimage);
  }

  useFocusEffect(
    useCallback(() => {
      handleBackground();
    }, [image])
  )

  return (
    <View style={stylesHomeBackground.container}>
      <Image
        source={{ uri: userimage.image }}
        style={stylesHomeBackground.image}
      />
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
