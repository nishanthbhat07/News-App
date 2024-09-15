import { Dimensions, Platform } from "react-native";

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const { width } = Dimensions.get("screen");
