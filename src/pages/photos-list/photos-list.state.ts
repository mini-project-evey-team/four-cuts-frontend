import { atom, selector } from "recoil";

export const $pageIndex = atom<number>({
  key: "pageIndex",
  default: 1,
});

export interface PageItem {
  id: string;
  title: string;
  contents: string;
  imageUrl: string[];
}

export interface FetchDataResponse {
  page: number;
  items: PageItem[];
}
export interface Page extends FetchDataResponse {
  isLastPage: boolean;
}

export const $fetchData = selector<Page>({
  key: "fetchData",
  get: async ({ get }) => {
    const currentPage = get($pageIndex);
    const response = await fetch("/data.json");

    const data = await response.json();
    const lastPage = data.data.length;

    const currentPageData = data.data[currentPage - 1] as FetchDataResponse;

    const pageData = {
      ...currentPageData,
      isLastPage: currentPage === lastPage,
    };

    return pageData;
  },
});
