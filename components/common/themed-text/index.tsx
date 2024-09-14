import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import { ThemedTextProps } from "../../../types/common";
import { COLORS } from "../../../constants/Colors";

const ThemedText = ({
  style,
  size = 14,
  type = "default",
  color = COLORS.black,
  ...rest
}: ThemedTextProps) => {
  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        { color, fontSize: size },
        style,
      ]}
      {...rest}
    />
  );
};

export default ThemedText;
