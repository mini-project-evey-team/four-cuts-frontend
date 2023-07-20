import { FC, useEffect } from "react";
import { PhotosListContainer } from "./container";
import { fetchData } from "./api";
type IPhotosListPageProps = {};

export const PhotosListPage: FC<IPhotosListPageProps> = ({}) => {
  const { getPhotosList } = fetchData();

  useEffect(() => {
    getPhotosList({ pageParam: 1 });
  }, []);

  return <PhotosListContainer />;
};
