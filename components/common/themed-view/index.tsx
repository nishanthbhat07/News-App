import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useThemeColor } from "../../../hooks/useThemeColor";
import { ThemedViewProps } from "../../../types/common";

const ThemedView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <View
      style={[styles.container, { backgroundColor }, style]}
      {...otherProps}
    />
  );
};

export default ThemedView;
