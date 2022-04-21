import { React } from "react";
import { View, Text } from "react-native";

import { styles } from "./HeadingTextBlockStyles";

const HeadingTextBlock = ({ heading1 = "", heading2 = "" }) => {
  return (
    <View>
      <Text style={styles.heading1}>{heading1.toUpperCase()}</Text>
      <Text style={styles.heading2}>{heading2}</Text>
    </View>
  );
};

export default HeadingTextBlock;
