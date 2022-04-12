import { React } from 'react';
import { FlatList } from 'react-native';

const List = ({ data = {}, renderItem = null, extraData = {} }) => {
	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			extraData={extraData}
		/>
	);
};

export default List;
