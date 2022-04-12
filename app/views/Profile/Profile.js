import React from "react";
import { Text, View } from "react-native";

import Container from "widgets/shared/Container/Container";
import { profileStyles } from "./ProfileStyles";

const Profile = () => {
  return (
    <Container>
      <View style={profileStyles.view}>
        <Text> Motivo de la consulta</Text>
      </View>
    </Container>
  );
};

export default Profile;
