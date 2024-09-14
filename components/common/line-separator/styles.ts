import { StyleSheet } from "react-native";
import { LineSeparatorStyleProps } from "../../../types/common";

export const LineSeparatorStyle = ({
  color,
  thickness,
  margin,
}: LineSeparatorStyleProps) =>
  StyleSheet.create({
    separator: {
      backgroundColor: color,
      height: thickness,
      marginVertical: margin,
    },
  }).separator;
