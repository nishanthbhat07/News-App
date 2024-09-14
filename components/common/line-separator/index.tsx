import React from "react";
import { View } from "react-native";
import { LineSeparatorStyle } from "./styles";
import { LineSeparatorProps } from "../../../types/common";
import { COLORS } from "../../../constants/Colors";

const LineSeparator: React.FC<LineSeparatorProps> = ({
  color = COLORS.mediumGray,
  thickness = 1,
  margin = 10,
}) => {
  return <View style={LineSeparatorStyle({ color, thickness, margin })} />;
};

export default LineSeparator;
