import React from "react";
import { TextInput, View, Text } from "react-native";
import { customInputStyles } from "./CustomInputStyles";
import { Picker } from "@react-native-picker/picker";

const CustomInput = ({
  placeholder,
  onChange,
  onChangeSelect,
  value,
  selectValue,
  error,
  label,
  editable = true,
  onBlur,
  labelAlign = "left",
  type = "input",
  options,
}) => {
  return (
    <View style={customInputStyles.wrapper}>
      <View>
        {label && (
          <Text style={[customInputStyles.label, { textAlign: labelAlign }]}>
            {label}
          </Text>
        )}
        {type === "input" && (
          <TextInput
            style={[
              customInputStyles.input,
              error && customInputStyles.hasError,
            ]}
            placeholder={placeholder}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            editable={editable}
          />
        )}
        {type === "select" && (
          <Picker
            selectedValue={selectValue}
            style={[customInputStyles.select]}
            onValueChange={onChangeSelect}
          >
            {options.map((option) => (
              <Picker.Item
                key={option.value}
                label={option.name}
                value={option.value}
              />
            ))}
          </Picker>
        )}
        {error && <Text style={customInputStyles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default CustomInput;
