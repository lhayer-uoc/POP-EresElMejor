import React from "react";
import { View } from "react-native";
import { HomeWelcome } from "app/widgets/home/HomeWelcome/HomeWelcome";
import { HomeBackground } from "app/widgets/home/HomeBackground/HomeBackground";

import Container from "app/widgets/shared/Container/Container";
import CustomButton from "app/widgets/shared/Button/CustomButton";
import ChallengeCard from "app/widgets/shared/ChallengeCard/ChallengeCard";
import RocketSvg from "assets/rocket.svg";

import { homeStyles } from "./HomeStyles";
import { useState } from "react";
import { useEffect } from "react";
import { getLastChallengeService } from "../../services/getLastChallengeService";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const [lastChallenge, setLastChallenge] = useState(null);
  const { authState } = useAuth();
  const navigation = useNavigation();

  const navigateToChallengeList = () => {
    props.navigation.navigate("Retos");
  };

  const navigateToChallenge = (itemData) => {
    props.navigation.navigate("Reto", {
      item: { ...itemData, id: itemData.id },
    });
  };

  const handleLastChallenge = async () => {
    const challenge = await getLastChallengeService();
    setLastChallenge(challenge);
  };

  useEffect(() => {
    handleLastChallenge();
  }, [navigation]);

  return (
    <Container negativeSpacing={true}>
      <View style={homeStyles.screenContainer}>
        <View style={homeStyles.wellcomeBlock}>
          <HomeBackground />
          <View style={homeStyles.wellcomeMessage}>
            <HomeWelcome name={authState.userData?.name} />
          </View>
        </View>
        <View style={homeStyles.lastChallengeBlock}>
          <ChallengeCard
            {...lastChallenge}
            heading1="Último reto"
            heading2={lastChallenge?.title}
            onPress={() => navigateToChallenge({ ...lastChallenge })}
          />
          <CustomButton
            title={"Ver todos tus retos"}
            action={navigateToChallengeList}
          >
            <RocketSvg width="16" height="16" fill="#FFF" />
          </CustomButton>
        </View>
      </View>
    </Container>
  );
};

export default Home;
