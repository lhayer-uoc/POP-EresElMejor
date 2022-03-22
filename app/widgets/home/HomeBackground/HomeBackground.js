import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { loadImageFromGallery } from '../../../utils/imageUtil';

import { stylesHomeBackground } from './HomeBackgrounStyles';

export const HomeBackground = () => {
	const [image, setImage] = useState(
		'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
	);

	const changeBackGround = async () => {
		//array como parametro las dimensiones de la imagen
		const result = await loadImageFromGallery([1, 1]);
		setImage(result.image);
	};

	return (
		<View style={stylesHomeBackground.container}>
			<Image source={{ uri: image }} style={stylesHomeBackground.image} />
			<TouchableOpacity
				tittle="+"
				style={stylesHomeBackground.button}
				onPress={changeBackGround}
			>
				<Text style={stylesHomeBackground.text}>+</Text>
			</TouchableOpacity>
		</View>
	);
};
