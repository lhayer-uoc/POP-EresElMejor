import { React } from "react";
import { TouchableOpacity, View } from "react-native";
import CircleProgressBar from "app/widgets/shared/CircleProgressBar/CircleProgressBar";
import HeadingTextBlock from "app/widgets/shared/HeadingTextBlock/HeadingTextBlock";
import SVGImg from "assets/right-arrow.svg";
import { IconCategory } from "../IconsCategory/IconCategory";
import { styles } from "./ChallengeCardStyles";

const ChallengeCard = ({
  percentage,
  heading1,
  heading2,
  onPress,
  style,
  category,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.containerIcon}>
        <IconCategory category={category} style={styles.containerIcon_icon} />
      </View>
      <View style={styles.containerContent}>
        <View style={styles.cardContent}>
          <View style={styles.leftColumn}>
            <CircleProgressBar percentage={percentage} />
          </View>
          <View style={styles.rightColumn}>
            <HeadingTextBlock heading1={heading1} heading2={heading2} />
          </View>
        </View>
        <SVGImg style={styles.arrowLink} width={30} height={30} />
      </View>
    </TouchableOpacity>
  );
};

export default ChallengeCard;
