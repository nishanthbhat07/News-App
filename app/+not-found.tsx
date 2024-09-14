import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../components/common/themed-view";
import ThemedText from "../components/common/themed-text";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export default function NotFoundScreen() {
  const title = "This screen doesn't exist.";
  const subtitle = "Go to home screen!";
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">{title}</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">{subtitle}</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
