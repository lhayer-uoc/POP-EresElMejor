import React, { useCallback, useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';

import { newChallengeStyles } from './NewChallengeStyles';
import { setChallengeService } from '../../services/setNewChallenge';
import { useForm } from '../../hooks/useForm';
import { useFocusEffect } from '@react-navigation/native';
import { emptyField, onlyNumbers } from '../../utils/formValidations';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import { useKeyboardStatus } from '../../hooks/useKeyboardStatus';
import { useState } from 'react';
import { getCategoriesService } from '../../services/getCategoriesService';
import PeriodicityInput from '../../widgets/shared/PeriodicityInput/PeriodicityInput';
import CustomInput from '../../widgets/shared/CustomInput/CustomInput';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const NewChallenge = ({ navigation }) => {
	const [categories, setCategories] = useState([]);
	const [periodicityDays, setPeriodicityDays] = useState({
		values: [],
		errorMessage: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	const progressBarColor = '#fc0';
	const progressBarStyle = 'Horizontal';

	const isKeyboardShown = useKeyboardStatus();

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
		setIsLoading(true);

		if (!periodicityDays.values.length) {
			setPeriodicityDays({
				...periodicityDays,
				errorMessage: 'Debes seleccionar la periodicidad de tu reto',
			});
			setIsLoading(false);
			return;
		}

		if (periodicityDays.values.length !== 0 && periodicityDays.errorMessage) {
			setPeriodicityDays({
				...periodicityDays,
				errorMessage: '',
			});
		}

		try {
			await setChallengeService(
				title,
				description,
				time,
				category,
				periodicityDays.values
			);
			resetForm();
			setTimeout(() => {
				setIsLoading(false);
				showMessage({
					message: 'Tu reto se ha creado correctamente',
					type: 'success',
				});
				navigation.navigate('Retos');
			}, 1000);
		} catch (error) {
			console.log('error: ', error);
			setIsLoading(false);

			showMessage({
				message: 'Ha ocurrido un error, vuelve a intentarlo',
				type: 'error',
			});
		}
	};

	const handleChangeSelect = async () => {
		const categories = await getCategoriesService();
		setCategories(categories);
	};

	const handlePeriodicity = selectedDay => {
		let stateDays = periodicityDays.values;
		if (stateDays.includes(selectedDay)) {
			stateDays = stateDays.filter(stateDay => stateDay !== selectedDay);
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
			setIsLoading(false);
			handleChangeSelect();
		}, [])
	);

	useFocusEffect(() => {
		if (!form) {
			getFormParams({
				title: { value: '', validation: [emptyField] },
				description: { value: '', validation: [emptyField] },
				periodicity: { value: '', validation: [emptyField] },
				time: { value: '', validation: [emptyField, onlyNumbers] },
				category: { value: '', validation: [emptyField, onlyNumbers] },
			});
		}
	});

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ScrollView>
				<View style={newChallengeStyles.loadingContainer}>
					<ProgressBar
						animating={isLoading}
						styleAttr={progressBarStyle}
						color={progressBarColor}
					/>
				</View>
				<View style={newChallengeStyles.container}>
					<CustomInput
						placeholder="Escribe el nombre del reto"
						label="Titulo"
						value={title?.value}
						onChange={value => onChange(value, 'title')}
						onBlur={() => onBlur('title')}
						error={title?.errorMessage}
						labelAlign="center"
					/>
					<CustomInput
						placeholder="Escribe la descripcion del reto"
						label="Descripcion"
						value={description?.value}
						onChange={value => onChange(value, 'description')}
						onBlur={() => onBlur('description')}
						error={description?.errorMessage}
						labelAlign="center"
					/>
					<CustomInput
						placeholder="Escribe la categoria del reto"
						label="Categoria"
						type="select"
						selectValue={category?.value}
						onChangeSelect={value => onChangeSelect(value, 'category')}
						labelAlign="center"
						options={categories}
					/>
					<CustomInput
						placeholder="Escribe el número de días que durará el reto"
						label="Duración"
						value={time?.value}
						onChange={value => onChange(value, 'time')}
						onBlur={() => onBlur('time')}
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
