import { atom } from "recoil";

export const $pageIndex = atom<number>({
  key: "pageIndex",
  default: 1,
});
