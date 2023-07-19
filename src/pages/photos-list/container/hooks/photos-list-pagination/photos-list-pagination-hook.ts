import { useRecoilState, useRecoilValue } from "recoil";
import { $fetchData, $pageIndex } from "../../../photos-list.state";

export const usePagination = () => {
  const currentPageData = useRecoilValue($fetchData);

  const [pageIndex, setPageIndex] = useRecoilState($pageIndex);

  const goPreviousPage = () => {
    setPageIndex((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };

  const goNextPage = () => {
    setPageIndex((prev) => prev + 1);
  };

  return {
    currentPageData,
    goPreviousPage,
    goNextPage,
    pageIndex,
  };
};
