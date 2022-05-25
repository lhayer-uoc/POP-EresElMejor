import React, { useCallback, useEffect, useState } from 'react';
import Container from 'widgets/shared/Container/Container';
import { View, Text } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

import { challengeListStyles } from './ChallengeListStyles';
import List from 'app/widgets/shared/List/List';
import { getChallengesService } from '../../services/getChallengesService';
import ChallengeCard from '../../widgets/shared/ChallengeCard/ChallengeCard';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';

const Item = ({ item, onPress, backgroundColor }) => {
	return (
		<ChallengeCard
			percentage={item.percentage}
			heading1={item.title}
			heading2={item.description}
			onPress={onPress}
			style={[challengeListStyles.item, backgroundColor]}
			category={item.category}
			notifications={item.notifications}
		/>
	);
};

const ChallengeList = props => {
	const [challenges, setChallenges] = useState(null);
	const [selectedId, setSelectedId] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { authState } = useAuth();
	const progressBarColor = '#fc0';
	const progressBarStyle = 'Horizontal';

	const onSelectItem = item => {
		setSelectedId(item.id);
		props.navigation.navigate('Reto', { itemId: item.id, item });
	};

	const handleChallenges = async id => {
		setIsLoading(true);
		const challenges = await getChallengesService(id);
		setChallenges(challenges);
		setTimeout(() => setIsLoading(false), 1000);
	};

	useFocusEffect(
		useCallback(() => {
			if (authState.userData?.id) handleChallenges(authState.userData.id);
		}, [authState])
	);

	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? '#E3E3E3' : '#FFF';
		const color = item.id === selectedId ? 'white' : 'black';

		return (
			<Item
				item={item}
				onPress={() => onSelectItem(item)}
				backgroundColor={{ backgroundColor }}
				textColor={{ color }}
			/>
		);
	};

	return (
		<Container>
			<View
				style={[
					challengeListStyles.container,
					!challenges || !challenges?.length
						? challengeListStyles.noChallenges
						: '',
				]}
			>
				<View style={challengeListStyles.loadingContainer}>
					<ProgressBar
						animating={isLoading}
						styleAttr={progressBarStyle}
						color={progressBarColor}
					/>
				</View>
				{challenges && challenges.length !== 0 ? (
					<List
						data={challenges}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						extraData={selectedId}
						style={challengeListStyles.list}
					/>
				) : (
					<Text>No hay Retos disponibles</Text>
				)}
			</View>
		</Container>
	);
};

export default ChallengeList;
