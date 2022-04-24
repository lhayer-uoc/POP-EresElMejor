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
    Deporte: sportIcon,
    Programacion: pc,
    Salud: pc,
    Nutricion: nutricion,
    Ocio: hobbie,
  };

  return (
    <View style={style}>
      <SvgCss xml={iconsXml[category] ?? defaultIcon} width={30} height={30} />
    </View>
  );
};
