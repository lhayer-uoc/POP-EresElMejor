import React from "react";
import { View } from "react-native";
import { SvgCss } from "react-native-svg";
import sportIcon from "../../../../assets/svgCategory/sportIcon";
import pc from "../../../../assets/svgCategory/pc";
import nutricion from "../../../../assets/svgCategory/nutricion";
import hobbie from "../../../../assets/svgCategory/hobbie";
import defaultIcon from "../../../../assets/svgCategory/defaultIcon";

export const IconCategory = ({ category, style }) => {
  const iconsXml = {
    sport: sportIcon,
    programming: pc,
    health: pc,
    nutrition: nutricion,
    leasure: hobbie,
  };

  return (
    <View style={style}>
      <SvgCss xml={iconsXml[category] ?? defaultIcon} width={30} height={30} />
    </View>
  );
};
