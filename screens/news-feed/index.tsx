import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useCallback } from "react";
import styles from "./styles";
import { useNewsFeedWithPagination } from "./hooks";
import NewsCard from "../../components/news-card";
import LineSeparator from "../../components/common/line-separator";
import { COLORS } from "../../constants/Colors";
import ThemedView from "../../components/common/themed-view";

const NewsFeed = () => {
  const { newsFeed, loadMoreArticles, isLoading } = useNewsFeedWithPagination();

  const ItemSeparator = useCallback(
    () => <LineSeparator color={COLORS.grey} thickness={1} />,
    [],
  );

  if (isLoading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.grey} />
      </ThemedView>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newsFeed}
        keyExtractor={(item, index) =>
          `${item.title}_${item.author}_${item.publishedAt}_${index}`
        }
        renderItem={({ item }) => <NewsCard item={item} />}
        onEndReached={loadMoreArticles}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default NewsFeed;
