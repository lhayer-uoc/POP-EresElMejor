import React, { useCallback } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { newChallengeStyles } from "./NewChallengeStyles";
import { setChallengeService } from "../../services/setNewChallenge";
import { useForm } from "../../hooks/useForm";
import { useFocusEffect } from "@react-navigation/native";
import { emptyField, onlyNumbers } from "../../utils/formValidations";
import { ScrollView } from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";
import { useKeyboardStatus } from "../../hooks/useKeyboardStatus";
import { useState } from "react";
import { getCategoriesService } from "../../services/getCategoriesService";
import PeriodicityInput from "../../widgets/shared/PeriodicityInput/PeriodicityInput";
import CustomInput from "../../widgets/shared/CustomInput/CustomInput";
import {loadImageFromGallery}  from '../../utils/imageUtil';
import PlusIcon from "assets/plus.svg";

const NewChallenge = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [periodicityDays, setPeriodicityDays] = useState({
    values: [],
    errorMessage: "",
  });
  const [image, setImage] = useState("");
  const isKeyboardShown = useKeyboardStatus();

	const selectImage = async () => {
		const result = await loadImageFromGallery([1, 1]);
		setImage(result.image);
	  }

  const {
    title,
    description,
    periodicity,
    time,
    category,
    onChange,
    onChangeSelect,
    onBlur,
    form,
    getFormParams,
    resetForm,
  } = useForm();

  const handleSubmitForm = async () => {
    if (!periodicityDays.values.length) {
      setPeriodicityDays({
        ...periodicityDays,
        errorMessage: "Debes seleccionar la periodicidad de tu reto",
      });
      return;
    }

    if (periodicityDays.values.length !== 0 && periodicityDays.errorMessage) {
      setPeriodicityDays({
        ...periodicityDays,
        errorMessage: "",
      });
    }

    try {
      await setChallengeService(
        title,
        description,
        time,
        category,
        periodicityDays.values,
        image,
      );
      showMessage({
        message: "Tu reto se ha creado correctamente",
        type: "success",
      });
      resetForm();
      navigation.navigate("Retos");
    } catch (error) {
      console.log("error: ", error);
      showMessage({
        message: "Ha ocurrido un error, vuelve a intentarlo",
        type: "error",
      });
    }
  };

  const handleChangeSelect = async () => {
    const categories = await getCategoriesService();
    setCategories(categories);
  };

  const handlePeriodicity = (selectedDay) => {
    let stateDays = periodicityDays.values;
    if (stateDays.includes(selectedDay)) {
      stateDays = stateDays.filter((stateDay) => stateDay !== selectedDay);
    } else {
      stateDays = [...stateDays, selectedDay];
    }

    setPeriodicityDays({
      ...periodicityDays,
      values: stateDays,
    });
  };

  useFocusEffect(
    useCallback(() => {
      handleChangeSelect();
    }, [])
  );

  useFocusEffect(() => {
    if (!form) {
      getFormParams({
        title: { value: "", validation: [emptyField] },
        description: { value: "", validation: [emptyField] },
        periodicity: { value: "", validation: [emptyField] },
        time: { value: "", validation: [emptyField, onlyNumbers] },
        category: { value: "", validation: [emptyField, onlyNumbers] },
      });
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={newChallengeStyles.container}>
        <View style={{ height: 250 }}>
						<Image source={{ uri: image }} style={{ height: "100%", width: "100%" }} />
						<TouchableOpacity
							style={[
								newChallengeStyles.button2,
								image ? newChallengeStyles.buttonOverlay : "",
							]}
							onPress={selectImage}
						>
							<PlusIcon
								fill="#000"
								style={newChallengeStyles.plusIcon}
								width="100%"
								height="100%"
							/>
						</TouchableOpacity>
					</View>
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
            type="select"
            selectValue={category?.value}
            onChangeSelect={(value) => onChangeSelect(value, "category")}
            labelAlign="center"
            options={categories}
          />
          <CustomInput
            placeholder="Escribe el número de días que durará el reto"
            label="Duración"
            value={time?.value}
            onChange={(value) => onChange(value, "time")}
            onBlur={() => onBlur("time")}
            error={time?.errorMessage}
            labelAlign="center"
          />
          <PeriodicityInput
            placeholder="Selecciona los días que le dedicaras a la semana"
            label="Periodicidad"
            values={periodicityDays.values}
            onChange={handlePeriodicity}
            error={periodicityDays?.errorMessage}
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
