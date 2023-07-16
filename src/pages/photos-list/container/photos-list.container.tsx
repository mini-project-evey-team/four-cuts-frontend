import { FC, Suspense } from "react";
import { PhotosListHeaderView, PhotosListItemView } from "../views";
import { Layout } from "../../../styles";

type IPhotosListContainerProps = {};

export const PhotosListContainer: FC<IPhotosListContainerProps> = ({}) => {
  return (
    <Layout>
      <PhotosListHeaderView />
      <Suspense fallback={<div>Loading</div>}>
        <PhotosListItemView />
      </Suspense>
    </Layout>
  );
};
