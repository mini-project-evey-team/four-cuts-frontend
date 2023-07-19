import { FC, useEffect } from "react";
import { PhotosMainLayout } from "./layout";
import { PhotosMainContainer } from "./container/photos-main.container";
import { $pageIndex } from "../photos-page-index.state";
import { useResetRecoilState } from "recoil";

type IPhotosMainPageProps = {};

export const PhotosMainPage: FC<IPhotosMainPageProps> = ({}) => {
  const resetPageIndex = useResetRecoilState($pageIndex);

  useEffect(() => {
    return () => {
      resetPageIndex();
    };
  }, [resetPageIndex]);
  return (
    <PhotosMainLayout>
      <PhotosMainContainer />
    </PhotosMainLayout>
  );
};
