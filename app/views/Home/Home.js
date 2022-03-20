import React from 'react';
import { View, Text, Alert } from 'react-native';
import Container from '../../widgets/shared/Container/Container';
import CustomButton from '../../widgets/shared/Button/CustomButton';
import RocketSvg from '../../../assets/rocket.svg';

import { homeStyles } from './HomeStyles';

const Home = () => {
	const showAlert = () => {
		Alert.alert('Botón pulsado', 'Has pulsado el botón ...');
	};

	return (
		<Container>
			<View>
				<Text>¡Cargaste la home!</Text>
				<CustomButton title={'Ver todos tus retos'} action={showAlert}>
					<RocketSvg width="16" height="16" />
				</CustomButton>
			</View>
		</Container>
	);
};

export default Home;
