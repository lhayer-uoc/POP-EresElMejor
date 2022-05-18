import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import CircleProgressBar from "app/widgets/shared/CircleProgressBar/CircleProgressBar";
import HeadingTextBlock from "app/widgets/shared/HeadingTextBlock/HeadingTextBlock";
import { challengeDetailStyles } from "./ChallengeDetailStyles";
import { IconCategory } from "app/widgets/shared/IconsCategory/IconCategory";

import Container from "widgets/shared/Container/Container";
import PeriodicityDay from "../../widgets/shared/PeriodicityDay/PeriodicityDay";
import { weekDays } from "../../utils/weekDays";

const getPeriodictiyToDay = (day) => {
  let dayToDTO = weekDays.find((weekDay) => weekDay.value === day);
  return dayToDTO;
};

const ChallengeDetail = (props) => {
  const { item } = props.route.params;
  return (
    <Container >
      <ScrollView>
      <View style={challengeDetailStyles.container}>
      <Image source={{uri: item?.image}} style ={challengeDetailStyles.image}/>
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
        <Text style={challengeDetailStyles.sectionTitle}>Detalle del reto</Text>
        <View style={challengeDetailStyles.inputContainer}>
          <Text style={challengeDetailStyles.label}>Categoría: </Text>
          <View style={challengeDetailStyles.containerIcon}>
            <IconCategory
              category={item.category}
              style={challengeDetailStyles.containerIcon_icon}
            />
          </View>
        </View>
        <View style={challengeDetailStyles.inputContainer}>
          <Text style={challengeDetailStyles.label}>Periodicidad: </Text>
          <View style={challengeDetailStyles.weekWrapper}>
            {item.periodicity.map((day) => (
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
          <Text>{item.time} días</Text>
        </View>
      </View>
      </ScrollView>
    </Container>
  );
};

export default ChallengeDetail;
