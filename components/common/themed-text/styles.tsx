import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/fonts";

const styles = StyleSheet.create({
  default: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  link: {
    // color: "#0a7ea4",
    fontFamily: FONTS.regular,
    fontSize: 16,
    lineHeight: 30,
  },
  subtitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 24,
  },
});

export default styles;
