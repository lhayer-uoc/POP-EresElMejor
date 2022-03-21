import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

import { loadImageFromGallery } from '../../../utils/imageUtil';

import { styleHomeWelcome } from './HomeWelcomeStyles';

export const HomeWelcome = () => {
	const [image, setImage] = useState(
		'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'
	);

	const changeAvatar = async () => {
		//array como parametro las dimensiones de la imagen
		const result = await loadImageFromGallery([1, 1]);
		setImage(result.image);
	};

	return (
		<View styles={styleHomeWelcome.container}>
			<Avatar
				rounded
				size={100}
				containerStyle={styleHomeWelcome.avatar}
				source={{ uri: image }}
				onPress={changeAvatar}
			/>

			<Text style={styleHomeWelcome.title}>Hola (Francisco)</Text>
			<Text style={styleHomeWelcome.subtitle}>Eres el mejor</Text>
		</View>
	);
};
