import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { weekDays } from "../../../utils/weekDays";
import PeriodicityDay from "../PeriodicityDay/PeriodicityDay";
import { periodicityInputStyles } from "./PeriodicityInputStyles";

const PeriodicityInput = ({
  onChange,
  values,
  error,
  label,
  labelAlign = "left",
  placeholder,
}) => {
  return (
    <View style={periodicityInputStyles.wrapper}>
      <View>
        {label && (
          <Text
            style={[periodicityInputStyles.label, { textAlign: labelAlign }]}
          >
            {label}
          </Text>
        )}
        {placeholder && (
          <Text style={[periodicityInputStyles.placeholder]}>
            {placeholder}
          </Text>
        )}
        <View style={periodicityInputStyles.weekWrapper}>
          {weekDays.map((day, index) => (
            <TouchableOpacity
              key={`${day}_${index}`}
              onPress={() => onChange(day.value)}
            >
              <PeriodicityDay
                day={day}
                styles={
                  values.includes(day.value)
                    ? periodicityInputStyles.selectedDay
                    : ""
                }
              />
            </TouchableOpacity>
          ))}
        </View>
        {!!error && <Text style={periodicityInputStyles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default PeriodicityInput;
