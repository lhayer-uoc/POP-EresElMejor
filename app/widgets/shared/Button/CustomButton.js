import { React } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './CustomButtonStyles';

const CustomButton = ({ title = '', action = null, children = null, customStyles }) => {
	return (
		<TouchableHighlight style={[styles.button, customStyles]} onPress={action}>
			<View style={styles.container}>
				{children}
				<Text style={{ ...styles.text, ...{ paddingLeft: children ? 10 : 0 } }}>
					{title}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

export default CustomButton;
