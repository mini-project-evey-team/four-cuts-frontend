import { FC } from "react";
import { PhotosListHeaderView, PhotosListItemView } from "../views";
import styled from "styled-components";
import { Layout } from "../../../styles";

type IPhotosListContainerProps = {};

export const PhotosListContainer: FC<IPhotosListContainerProps> = ({}) => {
  return (
    <Layout>
      <PhotosListHeaderView />
      <PhotosListItemView />
    </Layout>
  );
};
