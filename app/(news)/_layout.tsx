import { View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import styles from "./styles";
import AppHeader from "../../components/app-header";

const NewsLayout = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <Slot />
    </View>
  );
};

export default NewsLayout;
