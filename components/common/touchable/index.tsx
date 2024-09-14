import React from "react";
import { TouchableOpacity } from "react-native";
import { TouchableProps } from "../../../types/common";

const Touchable: React.FC<TouchableProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.65} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
