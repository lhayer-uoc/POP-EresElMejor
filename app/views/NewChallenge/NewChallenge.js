import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { newChallengeStyles } from "./NewChallengeStyles";
import { setChallengeService } from "../../services/setNewChallenge";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";
import { useForm } from "../../hooks/useForm";
import { useFocusEffect } from "@react-navigation/native";
import { emptyField } from "../../utils/formValidations";
import { ScrollView } from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";
import { useKeyboardStatus } from "../../hooks/useKeyboardStatus";

const NewChallenge = () => {
  const isKeyboardShown = useKeyboardStatus();

  const {
    title,
    description,
    periodicity,
    time,
    category,
    percentage,
    onChange,
    onBlur,
    form,
    getFormParams,
    resetForm,
  } = useForm();

  const handleSubmitForm = async () => {
    try {
      await setChallengeService(
        title,
        description,
        time,
        category,
        percentage,
        periodicity
      );
      showMessage({
        message: "Tu reto se ha creado correctamente",
        type: "success",
      });
      resetForm();
    } catch (error) {
      showMessage({
        message: "Ha ocurrido un error, vuelve a intentarlo",
        type: "error",
      });
    }
  };

  useFocusEffect(() => {
    if (!form) {
      getFormParams({
        title: { value: "", validation: [emptyField] },
        description: { value: "", validation: [emptyField] },
        periodicity: { value: "", validation: [emptyField] },
        time: { value: "", validation: [emptyField] },
        category: { value: "", validation: [emptyField] },
        percentage: { value: "", validation: [emptyField] },
      });
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={newChallengeStyles.container}>
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
          {!isKeyboardShown && (
            <TouchableOpacity
              style={newChallengeStyles.button}
              onPress={handleSubmitForm}
            >
              <Text style={newChallengeStyles.textButton}> Guardar reto</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default NewChallenge;
