import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Container from "../../widgets/shared/Container/Container";

import { homeStyles } from "./HomeStyles";

const Home = () => {
  return (
    <Container>
      <View>
        <Text>¡Cargaste la home!</Text>
      </View>
    </Container>
  );
};

export default Home;
