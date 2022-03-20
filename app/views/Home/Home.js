import React from 'react';
import { View, Text } from 'react-native';
import Container from '../../widgets/shared/Container/Container';
import LastChallengeCard from '../../widgets/home/LastChallengeCard/LastChallengeCard';

import { homeStyles } from './HomeStyles';

const Home = () => {
	return (
		<Container>
			<View>
				<Text>¡Cargaste la home!</Text>
				<LastChallengeCard />
			</View>
		</Container>
	);
};

export default Home;
