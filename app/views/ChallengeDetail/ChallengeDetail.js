import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CircleProgressBar from "app/widgets/shared/CircleProgressBar/CircleProgressBar";
import HeadingTextBlock from "app/widgets/shared/HeadingTextBlock/HeadingTextBlock";
import { challengeDetailStyles } from "./ChallengeDetailStyles";
import { IconCategory } from "app/widgets/shared/IconsCategory/IconCategory";
import CustomButton from "../../widgets/shared/Button/CustomButton";
import Bell from "assets/bell.svg";
import CancelBell from "assets/bell-slash.svg";
import Container from "widgets/shared/Container/Container";
import PeriodicityDay from "../../widgets/shared/PeriodicityDay/PeriodicityDay";
import { weekDays } from "../../utils/weekDays";
import { useHandleNotifications } from "../../hooks/useNotification";
import { useAuth } from "../../context/AuthContext";
import { getChallengeDetailsService } from "../../services/getChallengesDetailsService";
import { useFocusEffect } from "@react-navigation/native";

const getPeriodictiyToDay = (day) => {
  let dayToDTO = weekDays.find((weekDay) => weekDay.value === day);
  return dayToDTO;
};

const existNotifications = (item) => {
  return !!item?.notifications && item?.notifications?.length !== 0;
};

const ChallengeDetail = (props) => {
  const { item } = props.route.params;
  const [challenge, setChallenge] = useState(item);
  const [hasNotifications, setHasNotifications] = useState(
    existNotifications(item)
  );

  const { authState } = useAuth();
  const { createNotifications, cancelPushNotifications } =
    useHandleNotifications();

  const handleUploadProduct = async (id) => {
    try {
      const response = await getChallengeDetailsService(id);
      setChallenge(response);
      setHasNotifications(existNotifications(response));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleCancelations = async () => {
    await cancelPushNotifications(challenge.notifications, challenge.id);
    handleUploadProduct(challenge.id);
  };

  const handleCreateNotifications = async () => {
    await createNotifications(
      {
        periodicity: challenge.periodicity,
        challengeInfo: {
          id: challenge.id,
          title: challenge.title,
        },
      },
      authState.userData.toke
    );
    handleUploadProduct(challenge.id);
  };

  return (
    <Container negativeSpacing={true} style={challengeDetailStyles.wrapper}>
      <View style={challengeDetailStyles.container}>
        <View style={challengeDetailStyles.hero}>
          <View style={challengeDetailStyles.brief}>
            <CircleProgressBar
              style={challengeDetailStyles.circleProgressBar}
              percentage={item?.percentage}
            />
            <HeadingTextBlock
              style={challengeDetailStyles.challengeInfo}
              heading1={item?.title}
              heading2={item?.description}
            />
          </View>
        </View>
        <View style={challengeDetailStyles.contentDetails}>
          <Text style={challengeDetailStyles.sectionTitle}>
            Detalle del reto
          </Text>

          <View style={challengeDetailStyles.inputContainer}>
            <Text style={challengeDetailStyles.label}>Categoría: </Text>
            <View style={challengeDetailStyles.containerIcon}>
              <IconCategory
                category={challenge.category}
                style={challengeDetailStyles.containerIcon_icon}
              />
            </View>
          </View>

          <View style={challengeDetailStyles.inputContainer}>
            <Text style={challengeDetailStyles.label}>Periodicidad: </Text>
            <View style={challengeDetailStyles.weekWrapper}>
              {challenge.periodicity.map((day) => (
                <PeriodicityDay
                  key={day}
                  day={getPeriodictiyToDay(day)}
                  styles={challengeDetailStyles.periodicityDay}
                />
              ))}
            </View>
          </View>

          <View style={challengeDetailStyles.inputContainer}>
            <Text style={challengeDetailStyles.label}>Tiempo: </Text>
            <Text>{challenge.time} días</Text>
          </View>

          {challenge.percentage !== 100 && (
            <View style={challengeDetailStyles.notifications}>
              <TouchableOpacity>
                <CustomButton
                  style={challengeDetailStyles.notifyButton}
                  title={
                    hasNotifications
                      ? "Cancelar notificaciones"
                      : "Crear notificaciones"
                  }
                  action={() =>
                    hasNotifications
                      ? handleCancelations()
                      : handleCreateNotifications()
                  }
                >
                  {hasNotifications ? (
                    <CancelBell width={16} height={16} fill="#FFF" />
                  ) : (
                    <Bell width={16} height={16} fill="#FFF" />
                  )}
                </CustomButton>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Container>
  );
};

export default ChallengeDetail;
