import { FC } from "react";
import {
  PhotosPostAddPhotoView,
  PhotosPostInputView,
  PhotosPostHeaderView,
} from "../views";
import { Layout } from "../../../styles";
import { FormProvider } from "react-hook-form";
import { usePostForm } from "./hooks";
import styled from "styled-components";
type IPhotosPostContainerProps = {};

export const PhotosPostContainer: FC<IPhotosPostContainerProps> = ({}) => {
  const { form } = usePostForm();
  return (
    //form provider를 감싸줘서, provider아래의 어떤 컴포넌트에서도 react-hook-form이
    // 제공하는 다양한 훅을 통해서 form데이터에 접근할 수 있게함.
    <FormProvider {...form}>
      <Layout>
        <PhotosPostHeaderView />
        <ContainerDiv>
          <ChildDiv>
            <PhotosPostAddPhotoView />
          </ChildDiv>
          <ChildDiv>
            <PhotosPostInputView />
          </ChildDiv>
        </ContainerDiv>
      </Layout>
    </FormProvider>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0px 180px 0px 180px;
  justify-content: center;
  padding-top: 20px;
`;

const ChildDiv = styled.div`
  flex: 1;
  display: flex;
`;
