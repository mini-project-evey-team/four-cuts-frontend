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
  const { form } = usePostForm();
  return (
    //form provider를 감싸줘서, provider아래의 어떤 컴포넌트에서도 react-hook-form이
    // 제공하는 다양한 훅을 통해서 form데이터에 접근할 수 있게함.
    <FormProvider {...form}>
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
