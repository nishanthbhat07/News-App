import { useQuery } from "react-query";
import { useCallback, useEffect, useState } from "react";
import { getNewsFeed } from "./api";
import { useStorage } from "../../hooks/useMMKVStorage";
import { Article } from "../../types/api";
import { MMKV_KEYS } from "../../constants/mmkv-keys";

const PAGE_SIZE = 10;

export const useNewsFeed = (page: number) => {
  const [newsFeed, setNewsFeed] = useStorage<Article[]>(
    MMKV_KEYS.NEWS_FEED,
    [],
  );
  const [totalResults, setTotalResults] = useStorage<number>(
    MMKV_KEYS.TOTAL_RESULTS,
    0,
  );

  const { isLoading, refetch } = useQuery(
    ["news-feed", page],
    () => getNewsFeed({ page: page || 1 }),
    {
      onSuccess: (data) => {
        setNewsFeed((previousData) => [...data.data.articles, ...previousData]);
        setTotalResults(data.data.totalResults);
      },
      keepPreviousData: true,
      enabled: !newsFeed.length,
    },
  );

  return {
    newsFeed,
    isLoading,
    refetch,
    totalResults,
  };
};

export const useNewsFeedWithPagination = () => {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { newsFeed, refetch, totalResults, isLoading } =
    useNewsFeed(currentPage);

  const fetchNextBatch = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
    refetch();
  }, []);

  const loadInitialArticles = useCallback(() => {
    const initialArticles = newsFeed.slice(0, PAGE_SIZE);
    setDisplayedArticles(initialArticles);
    setCurrentPage(1);
  }, [newsFeed]);

  useEffect(() => {
    if (newsFeed.length) loadInitialArticles();
  }, [newsFeed.length]);

  const loadMoreArticles = useCallback(() => {
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const nextArticles = newsFeed.slice(startIndex, endIndex);

    if (nextArticles.length > 0 && totalResults > newsFeed.length) {
      setDisplayedArticles((prev) => [...prev, ...nextArticles]);
      setCurrentPage((prev) => prev + 1);
    }
  }, [newsFeed, currentPage]);

  return {
    newsFeed: displayedArticles,
    loadInitialArticles,
    loadMoreArticles,
    fetchNextBatch,
    isLoading,
  };
};
