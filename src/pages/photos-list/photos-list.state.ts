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

export interface Page {
  page: number;
  items: PageItem[];
}

export type FetchDataResponse = Page;

export const $fetchData = selector<FetchDataResponse>({
  key: "fetchData",
  get: async ({ get }) => {
    const currentPage = get($pageIndex);
    const response = await fetch("/data.json");

    const data = await response.json();

    const currentPageData = data.data[currentPage - 1] as Page;

    return currentPageData;
  },
});
