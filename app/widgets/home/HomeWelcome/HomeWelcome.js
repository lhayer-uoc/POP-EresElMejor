import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";

import { loadImageFromGallery } from "app/utils/imageUtil";

import { styleHomeWelcome } from "./HomeWelcomeStyles";
import { useFocusEffect } from "@react-navigation/native";
import { setAvatarService } from "../../../services/setAvatar";
import { getAvatarService } from "../../../services/getAvatar";

export const HomeWelcome = ({ name , user }) => {
  const [image, setImage] = useState(
    "https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"
  );
  const [avatar, setAvatar] = useState("");

  const changeAvatar = async () => {
    //array como parametro las dimensiones de la imagen
    const result = await loadImageFromGallery([1, 1]);
    setImage(result.image);
    setAvatarService(result.image, user);
  };
  
  const handleAvatar =async () => {
    const avatar = await getAvatarService(user);
    setAvatar(avatar)
  }
  useFocusEffect(
    useCallback(()=>{
      handleAvatar();
    }, [image])
  )
  
  return (
    <View>
      <Avatar
        rounded
        size={100}
        containerStyle={styleHomeWelcome.avatar}
        source={{ uri: avatar.image }}
        onPress={changeAvatar}
      />

      <Text style={styleHomeWelcome.title}>Hola, {name}</Text>
      <Text style={styleHomeWelcome.subtitle}>Eres el mejor</Text>
    </View>
  );
};
