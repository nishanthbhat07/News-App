import React from "react";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import images from "./images";
import ThemedView from "../common/themed-view";
import styles from "./styles";
import { COLORS } from "../../constants/Colors";
import Touchable from "../common/touchable";

const AppHeader: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={images.brandLogo}
        style={styles.brandLogo}
        contentFit="cover"
      />
      <Touchable onPress={onPress}>
        <MaterialIcons
          name="sync"
          size={30}
          color={COLORS.shadow}
          style={{
            transform: [
              {
                rotate: "-90deg",
              },
            ],
          }}
        />
      </Touchable>
    </ThemedView>
  );
};

export default AppHeader;
