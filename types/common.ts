import { TextProps, ViewProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};
