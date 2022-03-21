import React from 'react';
import { View, Text, Alert } from 'react-native';

import Container from '../../widgets/shared/Container/Container';
import CustomButton from '../../widgets/shared/Button/CustomButton';
import LastChallengeCard from '../../widgets/home/LastChallengeCard/LastChallengeCard';

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
				<LastChallengeCard />
				<CustomButton title={'Ver todos tus retos'} action={showAlert}>
					<RocketSvg width="16" height="16" fill="#FFF" />
				</CustomButton>
			</View>
		</Container>
	);
};

export default Home;
