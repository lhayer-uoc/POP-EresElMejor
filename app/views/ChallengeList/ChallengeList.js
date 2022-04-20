import React, { useState } from "react";
import Container from "widgets/shared/Container/Container";
import { View } from "react-native";

import { challengeListStyles } from "./ChallengeListStyles";
import List from "app/widgets/shared/List/List";
import { useEffect } from "react";
import { getChallengesService } from "../../services/getChallengesService";
import ChallengeCard from "../../widgets/shared/ChallengeCard/ChallengeCard";

const Item = ({ item, onPress, backgroundColor }) => {
  return (
    <ChallengeCard
      percentage={item.percentage}
      heading1={item.title}
      heading2={item.description}
      onPress={onPress}
      style={[challengeListStyles.item, backgroundColor]}
    />
  );
};

const ChallengeList = (props) => {
  const [challenges, setChallenges] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const onSelectItem = (item) => {
    setSelectedId(item.id);
    props.navigation.navigate("Reto", { itemId: item.id, item });
  };

  const handleChallenges = async () => {
    const challenges = await getChallengesService();
    setChallenges(challenges);
  };

  useEffect(() => {
    handleChallenges();
  }, []);

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
          data={challenges}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </Container>
  );
};

export default ChallengeList;
