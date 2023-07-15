import { FC } from "react";
import {
  PhotosPostAddPhotoView,
  PhotosPostInputView,
  PhtosPostHeaderView,
} from "../views";
import { Layout } from "../../../styles";
type IPhotosPostContainerProps = {};

export const PhotosPostContainer: FC<IPhotosPostContainerProps> = ({}) => {
  return (
    <Layout>
      <PhtosPostHeaderView />
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
