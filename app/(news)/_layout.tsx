import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import AppHeader from "../../components/app-header";

const NewsLayout = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
    </View>
  );
};

export default NewsLayout;
