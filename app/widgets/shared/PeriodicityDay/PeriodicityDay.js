import React from "react";
import { View, Text } from "react-native";
import { periodicityDayStyles } from "./PeriodicityDayStyles";

const PeriodicityDay = ({ day, styles }) => {
  return (
    <View>
      <Text style={[periodicityDayStyles.day, styles]}>{day.legend}</Text>
    </View>
  );
};

export default PeriodicityDay;
