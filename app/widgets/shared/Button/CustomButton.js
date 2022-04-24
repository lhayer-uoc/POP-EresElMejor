import { React } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Spinner from "assets/spinner.svg";
import { styles } from "./CustomButtonStyles";

const CustomButton = ({
  title = "",
  action = null,
  children = null,
  disable = false,
  fullWidth = false,
  theme,
  loading,
  style,
}) => {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        { width: fullWidth ? "100%" : "auto" },
        theme && styles[theme],
        style,
      ]}
      onPress={!disable ? action : null}
    >
      <View style={[styles.container, disable && styles.disable]}>
        {children}
        <Text
          style={{
            ...styles[`text${theme ? `_${theme}` : ""}`],
            ...{ paddingLeft: children ? 10 : 0 },
          }}
        >
          {title}
        </Text>
        {loading && (
          <Spinner
            style={styles.loadingIcon}
            fill="#fff"
            width={18}
            height={18}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default CustomButton;
