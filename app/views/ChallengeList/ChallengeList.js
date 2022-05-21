import React, { useCallback, useEffect, useState } from "react";
import Container from "widgets/shared/Container/Container";
import { View } from "react-native";

import { challengeListStyles } from "./ChallengeListStyles";
import List from "app/widgets/shared/List/List";
import { getChallengesService } from "../../services/getChallengesService";
import ChallengeCard from "../../widgets/shared/ChallengeCard/ChallengeCard";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

const Item = ({ item, onPress, backgroundColor }) => {
  return (
    <ChallengeCard
      percentage={item.percentage}
      heading1={item.title}
      heading2={item.description}
      onPress={onPress}
      style={[challengeListStyles.item, backgroundColor]}
      category={item.category}
      notifications={item.notifications}
    />
  );
};

const ChallengeList = (props) => {
  const [challenges, setChallenges] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const { authState } = useAuth();

  const onSelectItem = (item) => {
    setSelectedId(item.id);
    props.navigation.navigate("Reto", { itemId: item.id, item });
  };

  const handleChallenges = async (id) => {
    const challenges = await getChallengesService(id);
    setChallenges(challenges);
  };

  useFocusEffect(
    useCallback(() => {
      if (authState.userData?.id) handleChallenges(authState.userData.id);
    }, [authState])
  );

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
          style={challengeListStyles.list}
        />
      </View>
    </Container>
  );
};

export default ChallengeList;
