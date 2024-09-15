import { View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import styles from "./styles";
import AppHeader from "../../components/app-header";
import { eventEmit } from "../../utils/event-emitter";
import { EVENT_LISTENERS_KEYS } from "../../constants/event-listeners-keys";

const NewsLayout = () => {
  const handleRefresh = () => {
    eventEmit(EVENT_LISTENERS_KEYS.FETCH_NEXT_BATCH);
  };

  return (
    <View style={styles.container}>
      <AppHeader onPress={handleRefresh} />
      <Slot />
    </View>
  );
};

export default NewsLayout;
