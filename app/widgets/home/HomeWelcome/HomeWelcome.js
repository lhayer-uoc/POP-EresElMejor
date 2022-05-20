import React, { useState } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { setAvatarService } from "../../../services/setAvatar";
import { auth } from "../../../config/db";
import { loadImageFromGallery } from "app/utils/imageUtil";

import { styleHomeWelcome } from "./HomeWelcomeStyles";

export const HomeWelcome = ({ name }) => {
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState(auth.currentUser.photoURL);

  const changeAvatar = async () => {
    const image = await loadImageFromGallery([1, 1]);
    setImage(image.image);
    setAvatarService(image.image);
    setAvatar(auth.currentUser.photoURL);
  };
  
  return (
    <View>
      <Avatar
        rounded
        size={100}
        containerStyle={styleHomeWelcome.avatar}
        source={{ uri: avatar }}
        onPress={changeAvatar}
      />
      <Text style={styleHomeWelcome.title}>Hola, {name}</Text>
      <Text style={styleHomeWelcome.subtitle}>Eres el mejor</Text>
    </View>
  );
};
