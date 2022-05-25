import { StyleSheet } from 'react-native';

export const newChallengeStyles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingBottom: 100,
		marginHorizontal: 40,
	},
	text: {
		alignSelf: 'center',
		marginVertical: 20,
	},
	textInput: {
		fontSize: 15,
		height: 25,
		marginHorizontal: 35,
	},
	button: {
		alignItems: 'center',
		alignSelf: 'center',
		marginVertical: 15,
		backgroundColor: 'black',
		padding: 10,
		borderRadius: 10,
		width: '50%',
		height: 55,
		justifyContent: 'center',
	},
	textButton: {
		fontSize: 15,
		color: 'white',
		alignSelf: 'center',
	},
	button2: {
		position: 'absolute',
		padding: 10,
		borderColor: '#000',
		borderStyle: 'solid',
		borderWidth: 1,
		top: '80%',
		borderRadius: 100,
		left: '85%',
		transform: [{ translateX: -22 }, { translateY: -22 }],
		height: 45,
		width: 45,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonOverlay: {
		backgroundColor: '#fff',
		borderColor: 'transparent',
	},
	plusIcon: {
		height: 10,
		width: 10,
	},
	loadingContainer: {
		marginTop: 0,
	},
});
