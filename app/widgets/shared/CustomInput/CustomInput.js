import React from "react";
import { TextInput, View, Text } from "react-native";
import { customInputStyles } from "./CustomInputStyles";

const CustomInput = ({
  placeholder,
  onChange,
  value,
  error,
  label,
  editable = true,
  onBlur,
  labelAlign = "left",
}) => {
  return (
    <View style={customInputStyles.wrapper}>
      <View>
        {label && (
          <Text style={[customInputStyles.label, { textAlign: labelAlign }]}>
            {label}
          </Text>
        )}
        <TextInput
          style={[customInputStyles.input, error && customInputStyles.hasError]}
          placeholder={placeholder}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          editable={editable}
        />
        {error && <Text style={customInputStyles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default CustomInput;
