import * as React from 'react';
import { Easing, TextInput, Animated, View, StyleSheet } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

import { getCircleProgressBarStyles } from './CircleProgressBarStyles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function CircleProgressBar({
	percentage = 75,
	radius = 40,
	strokeWidth = 6,
	duration = 500,
	color = '#000000',
	delay = 0,
	textColor,
	max = 100,
	unit = '%',
}) {
	const circleProgressBarStyles = getCircleProgressBarStyles(
		radius,
		textColor,
		color
	);

	const animatedValue = React.useRef(new Animated.Value(0)).current;
	const circleRef = React.useRef();
	const inputRef = React.useRef();
	const circumference = 2 * Math.PI * radius;
	const halfCircle = radius + strokeWidth;

	const animation = toValue => {
		return Animated.timing(animatedValue, {
			delay,
			toValue,
			duration,
			useNativeDriver: true,
			easing: Easing.out(Easing.ease),
		}).start();
	};

	React.useEffect(() => {
		animation(percentage);
		animatedValue.addListener(v => {
			if (circleRef?.current) {
				const maxPerc = (100 * v.value) / max;
				const strokeDashoffset =
					circumference - (circumference * maxPerc) / 100;
				circleRef.current.setNativeProps({
					strokeDashoffset,
				});
			}

			if (inputRef?.current) {
				inputRef.current.setNativeProps({
					text: `${Math.round(v.value)}${unit}`,
				});
			}
		});
		return () => {
			animatedValue.removeAllListeners();
		};
	}, [max, percentage]);

	return (
		<View style={circleProgressBarStyles.view}>
			<Svg
				height={radius * 2}
				width={radius * 2}
				viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
			>
				<G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
					<Circle
						cx="50%"
						cy="50%"
						r={radius}
						fill="transparent"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinejoin="round"
						strokeOpacity=".1"
					/>
					<AnimatedCircle
						ref={circleRef}
						cx="50%"
						cy="50%"
						r={radius}
						fill="transparent"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeDasharray={circumference}
						strokeDashoffset={circumference}
					/>
				</G>
			</Svg>
			<AnimatedTextInput
				ref={inputRef}
				underlineColorAndroid="transparent"
				editable={false}
				defaultValue="0"
				style={[StyleSheet.absoluteFillObject, circleProgressBarStyles.text]}
			/>
		</View>
	);
}
