import { StyleSheet } from 'react-native';

export const getCircleProgressBarStyles = (radius, textColor, color) => {
	return StyleSheet.create({
		text: {
			fontWeight: '900',
			textAlign: 'center',
			fontSize: radius / 2,
			color: textColor ?? color,
		},
		view: { width: radius * 2, height: radius * 2 },
	});
};
