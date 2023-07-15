import { FC } from "react";
import {
  PhotosMainHeaderView,
  PhotosMainSlideView,
  PhotosMainTitleView,
} from "../views";
import { Layout } from "../../../styles";

type IPhotosMainContainerProps = {};

export const PhotosMainContainer: FC<IPhotosMainContainerProps> = ({}) => {
  return (
    <Layout>
      <PhotosMainHeaderView />
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
        }}
      >
        <PhotosMainTitleView />
        <PhotosMainSlideView />
      </div>
    </Layout>
  );
};
