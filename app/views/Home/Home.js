import React from 'react';
import { View, Text, Alert } from 'react-native';

import Container from '../../widgets/shared/Container/Container';
import { HomeWelcome } from '../../widgets/home/HomeWelcome/HomeWelcome';
import { HomeBackground } from '../../widgets/home/HomeBackground/HomeBackground';
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
				<View>
					<HomeBackground />
				</View>
				<View style={homeStyles.homeWelcome}>
					<HomeWelcome />
				</View>
				<LastChallengeCard />
				<CustomButton title={'Ver todos tus retos'} action={showAlert}>
					<RocketSvg width="16" height="16" fill="#FFF" />
				</CustomButton>
			</View>
		</Container>
	);
};

export default Home;
