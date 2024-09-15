import { TextProps, TouchableOpacityProps, ViewProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  size?: number;
  color?: string;
};

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export interface TouchableProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export interface LineSeparatorStyleProps {
  color: string;
  thickness: number;
  margin: number;
}

export interface LineSeparatorProps {
  color?: string;
  thickness?: number;
  margin?: number;
}

export interface SideActionsProps {
  onPinPress?: () => void;
  showDeleteIcon?: boolean;
  onDeletePress?: () => void;
}
