import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { newChallengeStyles } from "./NewChallengeStyles";
import { HomeBackground } from "../../widgets/home/HomeBackground/HomeBackground";

const NewChallenge = () => {
  return (
    <View>
      <View style={newChallengeStyles.image}>
        <HomeBackground />
      </View>
      <View>
        <TextInput
          style={newChallengeStyles.input}
          placeholder="Nombre del reto"
        />

        <TextInput style={newChallengeStyles.input} placeholder="Detalle" />
        <TextInput style={newChallengeStyles.input} placeholder="Categoria" />
        <TextInput style={newChallengeStyles.input} placeholder="Tiempo" />
        <TextInput
          style={newChallengeStyles.input}
          placeholder="Periodicidad"
        />
        <TouchableOpacity style={newChallengeStyles.button}>
          <Text style={newChallengeStyles.textButton}> Guardar reto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NewChallenge;
