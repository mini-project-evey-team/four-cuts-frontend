import { FC } from "react";
import {
  PhotosPostAddPhotoView,
  PhotosPostInputView,
  PhotosPostHeaderView,
} from "../views";
import { Layout } from "../../../styles";
type IPhotosPostContainerProps = {};

export const PhotosPostContainer: FC<IPhotosPostContainerProps> = ({}) => {
  return (
    <Layout>
      <PhotosPostHeaderView />
      <div
        style={{
          display: "flex",
          height: "-webkit-fill-available",
          padding: "0px 200px 0px 200px",
        }}
      >
        <PhotosPostAddPhotoView />
        <PhotosPostInputView />
      </div>
    </Layout>
  );
};
