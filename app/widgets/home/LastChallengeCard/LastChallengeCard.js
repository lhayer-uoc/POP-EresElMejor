import { React } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import { styles } from './LastChallengeCardStyles';

import CircleProgressBar from '../../../widgets/shared/CircleProgressBar/CircleProgressBar';
import HeadingTextBlock from '../../../widgets/shared/HeadingTextBlock/HeadingTextBlock';
import SVGImg from '../../../../assets/right-arrow.svg';

const LastChallengeCard = () => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				Alert.alert('Last challenge', 'Navigate to last challenge page')
			}
		>
			<CircleProgressBar />
			<HeadingTextBlock
				heading1={'último reto'}
				heading2={'aprender react native'}
			/>
			<SVGImg width={30} height={30} />
		</TouchableOpacity>
	);
};

export default LastChallengeCard;
