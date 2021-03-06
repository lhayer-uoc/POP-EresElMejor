import { useEffect } from 'react';
import { useState } from 'react';

const initializeForm = formFields => {
	const initValues = {};
	for (let field in formFields) {
		initValues[field] = {
			value: formFields[field].value,
			validation: formFields[field].validation,
			isValid: formFields[field]?.isValid ?? false,
		};
	}
	return initValues;
};

export const useForm = () => {
	let initialForm;

	const [state, setState] = useState();
	const [validForm, setValidForm] = useState(false);

	const onBlur = field => {
		const fieldName = state[field];
		if (!fieldName.validation || !fieldName.validation.length) return;
		fieldName.validation.forEach(validation => {
			const validValue = validation(fieldName.value);
			if (validValue?.message) {
				setState({
					...state,
					[field]: {
						...state[field],
						isValid: false,
						errorMessage: validValue.message,
					},
				});
				return;
			}

			setState({
				...state,
				[field]: {
					...state[field],
					isValid: true,
					errorMessage: null,
				},
			});
		});
	};

	const validateForm = () => {
		let validForm = true;
		for (let field in state) {
			validForm = state[field].isValid ? true : false;
			if (!validForm) break;
		}
		return validForm;
	};

	const onChange = (value, field) => {
		setState({
			...state,
			[field]: {
				...state[field],
				value,
				isValid: state[field]?.validation.length !== 0 ? false : true,
			},
		});
	};

	const onChangeSelect = (value, field) => {
		setState({
			...state,
			[field]: {
				...state[field],
				value,
				isValid: state[field]?.validation.length !== 0 ? false : true,
			},
		});
	};
	const onChangeAvatar =(value, field)=>{
		setState({
			...state,
			[field]:{
				...state[field],
				value,
				isValid: true
			},
		});
	}

	const getFormData = () => state;

	const getFormParams = params => {
		initialForm = initializeForm(params);
		setState(initialForm);
	};

	const resetForm = () => {
		setState(initialForm);
	};

	useEffect(() => {
		setValidForm(validateForm());
	}, [state]);

	return {
		...state,
		form: state,
		onBlur,
		onChange,
		onChangeSelect,
		onChangeAvatar,
		validateForm,
		validForm,
		getFormData,
		getFormParams,
		resetForm,
	};
};
