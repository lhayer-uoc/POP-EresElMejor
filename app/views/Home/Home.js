import React, { useState } from "react";
import { View } from "react-native";
import { HomeWelcome } from "app/widgets/home/HomeWelcome/HomeWelcome";
import { HomeBackground } from "app/widgets/home/HomeBackground/HomeBackground";

import Container from "app/widgets/shared/Container/Container";
import CustomButton from "app/widgets/shared/Button/CustomButton";
import ChallengeCard from "app/widgets/shared/ChallengeCard/ChallengeCard";
import RocketSvg from "assets/rocket.svg";

import { homeStyles } from "./HomeStyles";
import { getLastChallengeService } from "../../services/getLastChallengeService";
import { useAuth } from "../../context/AuthContext";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { getAuth } from "firebase/auth";

const Home = (props) => {
  const [lastChallenge, setLastChallenge] = useState(null);
  const { authState } = useAuth();
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user?.uid;

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

  useFocusEffect(
    useCallback(() => {
      handleLastChallenge();
    }, [])
  );

  return (
    <Container negativeSpacing={true}>
      <View style={homeStyles.screenContainer}>
        <View style={homeStyles.wellcomeBlock}>
          <HomeBackground userId={uid} />
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
            <RocketSvg width={16} height={16} fill="#FFF" />
          </CustomButton>
        </View>
      </View>
    </Container>
  );
};

export default Home;
