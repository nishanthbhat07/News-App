import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import Touchable from "../common/touchable";
import styles from "./styles";
import { COLORS } from "../../constants/Colors";
import ThemedText from "../common/themed-text";
import { SideActionsProps } from "../../types/common";

const deleteText = "Delete";
const pinText = "Pin";

const SideActions: React.FC<SideActionsProps> = ({
  onPinPress = () => {},
  showDeleteIcon = false,
  onDeletePress = () => {},
}) => {
  return (
    <View style={styles.container}>
      {!!showDeleteIcon && (
        <Animated.View style={[styles.actionContainer, styles.deleteContainer]}>
          <Touchable onPress={onDeletePress}>
            <AntDesign
              name="delete"
              style={styles.deleteIcon}
              size={24}
              color={COLORS.white}
              s
            />
            <ThemedText style={styles.text} size={12} color={COLORS.white}>
              {deleteText}
            </ThemedText>
          </Touchable>
        </Animated.View>
      )}

      {!showDeleteIcon && (
        <Animated.View style={[styles.actionContainer, styles.pinContainer]}>
          <Touchable onPress={onPinPress}>
            <AntDesign
              name="pushpino"
              size={24}
              color={COLORS.white}
              style={styles.pinIcon}
            />
            <ThemedText style={styles.text} size={12} color={COLORS.white}>
              {pinText}
            </ThemedText>
          </Touchable>
        </Animated.View>
      )}
    </View>
  );
};

export default SideActions;
