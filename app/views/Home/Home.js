import React from 'react';
import { Text } from "react-native";
import { View } from "react-native";
import Container from "../../widgets/shared/Container/Container";

import { HomeWelcome } from "../../widgets/home/HomeWelcome/HomeWelcome";
import { homeStyles } from "./HomeStyles";
import { HomeBackground } from "../../widgets/home/HomeBackground/HomeBackground";


const Home = () => {
  return (
    <Container style={homeStyles.container}>         
      <View  style={homeStyles.child1}>
        <HomeBackground/>
      </View>
      <View  style={homeStyles.child2}>
        <HomeWelcome/>
      </View>
    </Container>
  );
};

export default Home;
