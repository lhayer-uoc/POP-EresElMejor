import React, { useCallback, useState } from 'react';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import Container from 'widgets/shared/Container/Container';
import { View, StyleSheet } from 'react-native';

import { challengeListStyles } from './ChallengeListStyles';
import List from 'app/widgets/shared/List/List';
import { getChallengesService } from '../../services/getChallengesService';
import ChallengeCard from '../../widgets/shared/ChallengeCard/ChallengeCard';
import { useFocusEffect } from '@react-navigation/native';

const Item = ({ item, onPress, backgroundColor }) => {
	return (
		<ChallengeCard
			percentage={item.percentage}
			heading1={item.title}
			heading2={item.description}
			onPress={onPress}
			style={[challengeListStyles.item, backgroundColor]}
			category={item.category}
		/>
	);
};

const ChallengeList = props => {
	const [challenges, setChallenges] = useState(null);
	const [selectedId, setSelectedId] = useState(null);

	const onSelectItem = item => {
		setSelectedId(item.id);
		props.navigation.navigate('Reto', { itemId: item.id, item });
	};

	const handleChallenges = async () => {
		const challenges = await getChallengesService();
		setChallenges(challenges);
	};

	useFocusEffect(
		useCallback(() => {
			handleChallenges();
		}, [])
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

	const styles = StyleSheet.create({
		example: {
			marginVertical: 24,
		},
	});

	return (
		<Container>
			<View style={challengeListStyles.container}>
				<View style={styles.example}>
					<ProgressBar
						styleAttr="Horizontal"
						color="#2196F3"
						progress={progress}
					/>
					{/* <ProgressBar
						styleAttr="Horizontal"
						color="#2196F3"
						indeterminate={false}
						progress={0.5}
					/> */}
				</View>
				<List
					data={challenges}
					renderItem={renderItem}
					keyExtractor={item => item.id}
					extraData={selectedId}
					style={challengeListStyles.list}
				/>
			</View>
		</Container>
	);
};

export default ChallengeList;
