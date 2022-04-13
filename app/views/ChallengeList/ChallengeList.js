import React, { useEffect, useState } from "react";
import Container from "widgets/shared/Container/Container";
import { View, TouchableOpacity, Text } from "react-native";

import { challengeListStyles } from "./ChallengeListStyles";
import List from "app/widgets/shared/List/List";
import CircleProgressBar from "app/widgets/shared/CircleProgressBar/CircleProgressBar";
import HeadingTextBlock from "app/widgets/shared/HeadingTextBlock/HeadingTextBlock";

const DATA = [
  {
    id: "1",
    title: "Primer reto",
    description: "Descripción del primer reto",
    percentage: 23,
  },
  {
    id: "2",
    title: "Segundo reto",
    description: "Descripción del segundo reto",
    percentage: 45,
  },
  {
    id: "3",
    title: "Tercer reto",
    description: "Descripción del tercer reto",
    percentage: 78,
  },
];

const Item = ({ item, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[challengeListStyles.item, backgroundColor]}
    >
      <CircleProgressBar percentage={item.percentage} />
      <HeadingTextBlock heading1={item.title} heading2={item.description} />
    </TouchableOpacity>
  );
};

const ChallengeList = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const onSelectItem = (item) => {
    setSelectedId(item.id);

    props.navigation.navigate("Reto", { itemId: item.id, item });
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#E3E3E3" : "#FFF";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => onSelectItem(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <Container>
      <View style={challengeListStyles.container}>
        <List
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </Container>
  );
};

export default ChallengeList;
