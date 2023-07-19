import { FC, Key, Suspense, useEffect } from "react";
import { PhotosListHeaderView, PhotosListItemView } from "../views";
import { Layout } from "../../../styles";
import { useInfinityQueryData } from "./hooks";
import { useRecoilValue } from "recoil";
import { $pageIndex } from "../photos-list.state";

type IPhotosListContainerProps = {};

export const PhotosListContainer: FC<IPhotosListContainerProps> = ({}) => {
  const {
    pages,
    isFetching,
    fetchNextPagePhotos,
    fetchPrevPagePhotos,
    hasNextPage,
    hasPreviousPage,
  } = useInfinityQueryData();

  const pageIndex = useRecoilValue($pageIndex);

  if (isFetching || !pages) {
    return <div>Loading</div>;
  }

  console.log("1233", pages);
  const currentPageData = pages[pageIndex - 1];
  console.log("456", currentPageData);

  return (
    <Layout>
      <PhotosListHeaderView />
      <Suspense fallback={<div>Loading...</div>}>
        {currentPageData.items.map((item: any, index: any) => {
          return (
            <PhotosListItemView
              key={index}
              item={item}
              fetchPrevPagePhotos={fetchPrevPagePhotos}
              fetchNextPagePhotos={fetchNextPagePhotos}
              hasNextPage={hasNextPage}
              hasPreviousPage={hasPreviousPage}
            />
          );
        })}
      </Suspense>
    </Layout>
  );
};
