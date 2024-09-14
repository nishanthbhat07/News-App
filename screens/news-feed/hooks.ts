import { useInfiniteQuery } from "react-query";
import { useMemo } from "react";
import { getNewsFeed } from "./api";

const PAGE_SIZE = 10;

export const useNewsFeed = () => {
  const {
    data: { pages = [] } = {},
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["news-feed"],
    ({ pageParam = 1 }) => getNewsFeed({ page: pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        const { totalResults } = lastPage.data || {};
        const nextPage = pages.length + 1;
        return nextPage <= totalResults / PAGE_SIZE ? nextPage : undefined;
      },
    },
  );

  const newsFeed = useMemo(() => {
    return pages?.length
      ? pages?.map((page) => page?.data?.articles)?.flat()
      : [];
  }, [pages]);

  const handleFetchNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    newsFeed,
    isLoading,
    hasNextPage,
    handleFetchNextPage,
    isFetchingNextPage,
  };
};
