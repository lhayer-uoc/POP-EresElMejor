import React from 'react';
import { Text, View } from 'react-native';
import CircleProgressBar from 'app/widgets/shared/CircleProgressBar/CircleProgressBar';
import HeadingTextBlock from 'app/widgets/shared/HeadingTextBlock/HeadingTextBlock';
import { challengeDetailStyles } from './ChallengeDetailStyles';
import { IconCategory } from 'app/widgets/shared/IconsCategory/IconCategory';

import Container from 'widgets/shared/Container/Container';

const ChallengeDetail = props => {
	const { item } = props.route.params;
	return (
		<Container>
			<View style={challengeDetailStyles.container}>
				<View style={challengeDetailStyles.brief}>
					<HeadingTextBlock
						style={challengeDetailStyles.challengeInfo}
						heading1={item?.title}
						heading2={item?.description}
					/>
					<CircleProgressBar
						style={challengeDetailStyles.circleProgressBar}
						percentage={item?.percentage}
					/>
				</View>
				<Text style={challengeDetailStyles.sectionTitle}>Detalle del reto</Text>
				<View style={challengeDetailStyles.inputContainer}>
					<Text style={challengeDetailStyles.label}>Categoría: </Text>
					<View style={challengeDetailStyles.containerIcon}>
						<IconCategory
							category={item.category}
							style={challengeDetailStyles.containerIcon_icon}
						/>
					</View>
				</View>
				<View style={challengeDetailStyles.inputContainer}>
					<Text style={challengeDetailStyles.label}>Periodicidad: </Text>
					<Text>{item.periodicity}</Text>
				</View>
				<View style={challengeDetailStyles.inputContainer}>
					<Text style={challengeDetailStyles.label}>Tiempo: </Text>
					<Text>{item.time} días</Text>
				</View>
			</View>
		</Container>
	);
};

export default ChallengeDetail;
