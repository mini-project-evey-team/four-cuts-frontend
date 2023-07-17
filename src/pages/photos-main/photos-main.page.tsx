import { FC } from "react";
import { PhotosMainLayout } from "./layout";
import { PhotosMainContainer } from "./container/photos-main.container";
type IPhotosMainPageProps = {};

export const PhotosMainPage: FC<IPhotosMainPageProps> = ({}) => {
  return (
    <PhotosMainLayout>
      <PhotosMainContainer />
    </PhotosMainLayout>
  );
};
