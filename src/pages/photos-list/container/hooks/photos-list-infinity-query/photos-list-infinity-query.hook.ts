import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchData } from "../../../api";
import { useRecoilState } from "recoil";
import { $pageIndex } from "../../../photos-list.state";

export const useInfinityQueryData = () => {
  const { getPhotosList } = fetchData();

  const [pageIndex, setPageIndex] = useRecoilState($pageIndex);

  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
    isFetchingNextPage,
    isLoading,
    isError,
    hasPreviousPage,
    hasNextPage,
  } = useInfiniteQuery(["photosList"], getPhotosList, {
    getNextPageParam: (lastPage) => {
      if (lastPage.current_page >= lastPage.total_page) {
        return undefined;
      }
      return lastPage.current_page + 1;
    },
  });

  const isFetching = isLoading || isFetchingNextPage || isFetchingPreviousPage;

  const fetchNextPagePhotos = () => {
    setPageIndex(pageIndex + 1);
    fetchNextPage();
  };

  const fetchPrevPagePhotos = () => {
    if (pageIndex === 1) {
      return;
    }
    setPageIndex(pageIndex - 1);
    fetchPreviousPage();
  };

  if (isLoading || isError) {
    return {
      isLoading,
      isError,
      data: [],
    };
  }

  return {
    isLoading: false,
    pages: data?.pages,
    fetchPrevPagePhotos,
    fetchNextPagePhotos,
    isFetching,
    hasNextPage,
    hasPreviousPage,
  };
};
