import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import styles from "./styles";
import { useNewsFeed } from "./hooks";
import NewsCard from "../../components/news-card";
import LineSeparator from "../../components/common/line-separator";
import { COLORS } from "../../constants/Colors";

const NewsFeed = () => {
  const { newsFeed, handleFetchNextPage, isFetchingNextPage } = useNewsFeed();

  const ItemSeparator = useCallback(
    () => <LineSeparator color={COLORS.grey} thickness={1} />,
    [],
  );
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newsFeed}
        keyExtractor={(item, index) =>
          `${item.title}_${item.author}_${item.publishedAt}_${index}`
        }
        renderItem={({ item }) => <NewsCard item={item} />}
        onEndReached={handleFetchNextPage}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<Text>{isFetchingNextPage && "Loading..."}</Text>}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default NewsFeed;
