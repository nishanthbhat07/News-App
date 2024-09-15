import React, { memo } from "react";
import dayjs from "dayjs";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import ThemedText from "../common/themed-text";
import { Article } from "../../types/api";
import ThemedView from "../common/themed-view";
import { COLORS } from "../../constants/Colors";
import { toTitleCase } from "../../screens/news-feed/utils";

const PinnedText = "Pinned on top";

const NewsCard: React.FC<{ item: Article }> = ({ item }) => {
  const {
    source: { name = "" } = {},
    title = "",
    urlToImage = "",
    publishedAt,
    author,
    isPinned,
  } = item || {};
  return (
    <ThemedView style={styles.container}>
      {!!isPinned && (
        <ThemedView style={styles.pinnedContainer}>
          <AntDesign
            name="pushpino"
            size={12}
            color={COLORS.fadedGrey}
            style={styles.pinIcon}
          />
          <ThemedText color={COLORS.fadedGrey} size={14}>
            {PinnedText}
          </ThemedText>
        </ThemedView>
      )}
      <ThemedView style={styles.header}>
        <ThemedText color={COLORS.fadedGrey} size={14}>
          {name}
        </ThemedText>
        <ThemedText size={12}>
          {dayjs(publishedAt).format("hh:mm A")}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.body}>
        <ThemedText
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.title}
          type="title"
          size={18}
        >
          {title}
        </ThemedText>
        <Image
          transition={800}
          source={{ uri: urlToImage }}
          style={styles.image}
        />
      </ThemedView>
      <ThemedText color={COLORS.mediumGray} size={12}>
        {toTitleCase(author || "")}
      </ThemedText>
    </ThemedView>
  );
};

export default memo(NewsCard);
