import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Swipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import styles from "./styles";
import { useNewsFeedWithPagination } from "./hooks";
import NewsCard from "../../components/news-card";
import LineSeparator from "../../components/common/line-separator";
import { COLORS } from "../../constants/Colors";
import ThemedView from "../../components/common/themed-view";
import { eventListener, removeListener } from "../../utils/event-emitter";
import { EVENT_LISTENERS_KEYS } from "../../constants/event-listeners-keys";
import SideActions from "../../components/side-actions";
import { Article } from "../../types/api";

const NewsFeed = () => {
  const { newsFeed, loadMoreArticles, isLoading, fetchNextBatch } =
    useNewsFeedWithPagination();
  const [articles, setArticles] = useState(newsFeed);

  const [openSwipeableIndex, setOpenSwipeableIndex] = useState<number | null>(
    null,
  );

  const swipeableRefs = useRef<SwipeableMethods[]>([]);

  const closeOpenSwipeable = () => {
    if (
      openSwipeableIndex !== null &&
      swipeableRefs.current[openSwipeableIndex]
    ) {
      swipeableRefs.current[openSwipeableIndex].close();
    }
    setOpenSwipeableIndex(null);
  };

  useEffect(() => {
    eventListener(EVENT_LISTENERS_KEYS.FETCH_NEXT_BATCH, fetchNextBatch);

    return () => {
      removeListener(EVENT_LISTENERS_KEYS.FETCH_NEXT_BATCH);
    };
  }, []);

  useEffect(() => {
    setArticles(newsFeed);
  }, [newsFeed]);

  const ItemSeparator = useCallback(
    () => <LineSeparator color={COLORS.grey} thickness={1} />,
    [],
  );

  const deleteArticle = useCallback((index: number) => {
    setArticles((prevArticles) => prevArticles.filter((_, i) => i !== index));
  }, []);

  const pinArticle = useCallback((item: Article, index: number) => {
    setArticles((prevArticles) => [
      { ...item, isPinned: true },
      ...prevArticles.slice(0, index),
      ...prevArticles.slice(index + 1),
    ]);
  }, []);

  if (isLoading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </ThemedView>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={articles}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
        keyExtractor={(item, index) =>
          `${item.title}_${item.author}_${item.publishedAt}_${index}`
        }
        renderItem={({ item, index }) => (
          <Swipeable
            ref={(ref) => {
              if (ref) swipeableRefs.current[index] = ref;
            }}
            renderLeftActions={() => {
              return (
                !item.isPinned && (
                  <SideActions onPinPress={() => pinArticle(item, index)} />
                )
              );
            }}
            renderRightActions={() => {
              return (
                <SideActions
                  showDeleteIcon
                  onDeletePress={() => {
                    deleteArticle(index);
                  }}
                />
              );
            }}
            overshootLeft={false}
            overshootRight={false}
            friction={1.5}
            containerStyle={styles.swipeContainer}
            activeOffsetX={[-20, 20]} // Increased threshold for swipe activation
            failOffsetY={[-10, 10]}
            onSwipeableOpen={() => {
              closeOpenSwipeable();
              setOpenSwipeableIndex(index);
            }}
            onSwipeableClose={() => {
              if (openSwipeableIndex === index) {
                setOpenSwipeableIndex(null);
              }
            }}
            onSwipeableWillOpen={(direction) => {
              if (direction === "right") {
                deleteArticle(index);
                swipeableRefs.current[index].openRight();
              } else {
                pinArticle(item, index);
                swipeableRefs.current[index].openLeft();
              }
            }}
          >
            <NewsCard item={item} />
          </Swipeable>
        )}
        onEndReached={loadMoreArticles}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default NewsFeed;
