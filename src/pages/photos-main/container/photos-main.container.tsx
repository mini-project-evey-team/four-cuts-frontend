import { FC } from "react";
import {
  PhotosMainHeaderView,
  PhotosMainSlideView,
  PhotosMainTitleView,
} from "../views";
import { Layout } from "../../../styles";
import { usePhotosMainData } from "./hooks";

type IPhotosMainContainerProps = {};

export const PhotosMainContainer: FC<IPhotosMainContainerProps> = ({}) => {
  const { photoUrls, loading } = usePhotosMainData();

  if (loading) {
    return <div></div>;
  }

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
        <PhotosMainSlideView photoUrls={photoUrls} />
      </div>
    </Layout>
  );
};
