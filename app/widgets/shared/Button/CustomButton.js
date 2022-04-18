import { React } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./CustomButtonStyles";

const CustomButton = ({
  title = "",
  action = null,
  children = null,
  customStyles,
  disable = false,
  fullWidth = false,
  theme,
}) => {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        { width: fullWidth ? "100%" : "auto" },
        theme && styles[theme],
        customStyles,
      ]}
      onPress={!disable ? action : null}
    >
      <View style={[styles.container, disable && styles.disable]}>
        {children}
        <Text style={{ ...styles.text, ...{ paddingLeft: children ? 10 : 0 } }}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default CustomButton;
