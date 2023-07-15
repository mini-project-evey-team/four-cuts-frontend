import { FC } from "react";
import {
  PhotosDetailContentView,
  PhotosDetailHeaderView,
  PhotosDetailImageView,
} from "../views";
import { Layout } from "../../../styles";

type IPhotosDetailContainerProps = {};

export const PhotosDetailContainer: FC<IPhotosDetailContainerProps> = ({}) => {
  return (
    <Layout>
      <PhotosDetailHeaderView />
      <div
        style={{
          display: "flex",
          height: "-webkit-fill-available",
          padding: "0px 200px 0px 200px",
          gap: 100,
        }}
      >
        <div style={{ flex: 1, paddingTop: 30 }}>
          <PhotosDetailImageView />
        </div>
        <div style={{ flex: 1, paddingTop: 40 }}>
          <PhotosDetailContentView />
        </div>
      </div>
    </Layout>
  );
};
