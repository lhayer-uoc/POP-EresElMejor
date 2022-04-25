import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { newChallengeStyles } from "./NewChallengeStyles";
import { HomeBackground } from "../../widgets/home/HomeBackground/HomeBackground";
import { setChallengeService } from "../../services/setNewChallenge";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";
import { useForm } from "../../hooks/useForm";
import { useFocusEffect } from "@react-navigation/native";
import { emptyField } from "../../utils/formValidations";
import { Timestamp } from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";
const NewChallenge = () => {

  const { title, description, periodicity, time, category, percentage, timestamp, onChange, onBlur, form, getFormParams } = useForm();

  //FALTA IMPLEMENTAR EL CALCULO DE PERCENTAGE
  useFocusEffect(() => {
    if (!form) {
      getFormParams({
        title: { value: "", validation: [emptyField] },
        description: { value: "", validation: [emptyField] },
        periodicity: { value: "", validation: [emptyField] },
        time: { value: "", validation: [emptyField] },
        category: { value: "", validation: [emptyField] },
        percentage: { value: "", validation: [emptyField] },
        timestamp: { value: Timestamp.fromDate(new Date()), validation: [emptyField] },
      });
    }
  });

  const docData = {
    title: title.value,
    category: category.value,
    description: description.value,
    percentage: percentage.value,
    periodicity: periodicity.value,
    time: time.value,
    timestamp: timestamp.value
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View >
        <View style={newChallengeStyles.image}>
          <HomeBackground />
        </View>
        <ScrollView contentContainerStyle={newChallengeStyles.container}>
          <CustomInput
            placeholder="Escribe el nombre del reto"
            label="Titulo"
            value={title?.value}
            onChange={(value) => onChange(value, "title")}
            onBlur={() => onBlur("title")}
            error={title?.errorMessage}
            labelAlign="center"
          />
          <CustomInput
            placeholder="Escribe la descripcion del reto"
            label="Descripcion"
            value={description?.value}
            onChange={(value) => onChange(value, "description")}
            onBlur={() => onBlur("description")}
            error={description?.errorMessage}
            labelAlign="center"
          />
          <CustomInput
            placeholder="Escribe la categoria del reto"
            label="Categoria"
            value={category?.value}
            onChange={(value) => onChange(value, "category")}
            onBlur={() => onBlur("description")}
            error={category?.errorMessage}
            labelAlign="center"
          />
          <CustomInput
            placeholder="Escribe el tiempo que durará el reto"
            label="Duración"
            value={time?.value}
            onChange={(value) => onChange(value, "time")}
            onBlur={() => onBlur("time")}
            error={time?.errorMessage}
            labelAlign="center"
          />
          <CustomInput
            placeholder="Escribe la periodicidad del reto"
            label="Periodicidad"
            value={periodicity?.value}
            onChange={(value) => onChange(value, "periodicity")}
            onBlur={() => onBlur("periodicity")}
            error={periodicity?.errorMessage}
            labelAlign="center"
          />
          <TouchableOpacity style={newChallengeStyles.button} onPress={() => setChallengeService(docData)}>
            <Text style={newChallengeStyles.textButton}> Guardar reto</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default NewChallenge;

