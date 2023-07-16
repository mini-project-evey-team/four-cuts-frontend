import { FC } from "react";
import {
  PhotosPostAddPhotoView,
  PhotosPostInputView,
  PhotosPostHeaderView,
} from "../views";
import { Layout } from "../../../styles";
import { FormProvider } from "react-hook-form";
import { usePostForm } from "./hooks";
type IPhotosPostContainerProps = {};

export const PhotosPostContainer: FC<IPhotosPostContainerProps> = ({}) => {
  const { methods } = usePostForm();
  return (
    <FormProvider {...methods}>
      <Layout>
        <PhotosPostHeaderView />
        <div
          style={{
            display: "flex",
            height: "-webkit-fill-available",
            padding: "0px 180px 0px 180px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <PhotosPostAddPhotoView />
          </div>
          <div style={{ flex: 1 }}>
            <PhotosPostInputView />
          </div>
        </div>
      </Layout>
    </FormProvider>
  );
};
