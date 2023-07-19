import { FC, useEffect } from "react";
import { PhotosMainLayout } from "./layout";
import { PhotosMainContainer } from "./container/photos-main.container";
import { $pageIndex } from "../photos-page-index.state";
import { useResetRecoilState } from "recoil";
import { fetchMainData } from "./api";

type IPhotosMainPageProps = {};

export const PhotosMainPage: FC<IPhotosMainPageProps> = ({}) => {
  const resetPageIndex = useResetRecoilState($pageIndex);
  const { getMainPhotos } = fetchMainData();

  useEffect(() => {
    return () => {
      resetPageIndex();
    };
  }, [resetPageIndex]);

  useEffect(() => {
    getMainPhotos();
  }, []);

  return (
    <PhotosMainLayout>
      <PhotosMainContainer />
    </PhotosMainLayout>
  );
};
