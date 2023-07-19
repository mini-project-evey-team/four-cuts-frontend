import { FC, Key, Suspense, useEffect } from "react";
import { PhotosListHeaderView, PhotosListItemView } from "../views";
import { Layout } from "../../../styles";
import { useInfinityQueryData } from "./hooks";
import { useRecoilValue } from "recoil";
import { $pageIndex } from "../photos-list.state";
import { ArrowButtonComponent } from "../../../components";

type IPhotosListContainerProps = {};

export const PhotosListContainer: FC<IPhotosListContainerProps> = ({}) => {
  const { pages, isFetching, fetchNextPagePhotos, fetchPrevPagePhotos } =
    useInfinityQueryData();
  const pageIndex = useRecoilValue($pageIndex);

  if (isFetching || !pages) {
    return <div>Loading</div>;
  }

  const currentPageData = pages[pageIndex - 1];

  const hasPrevPageData = pageIndex > 1;
  const hasNextPageData = pageIndex < pages[0].total_page;

  // console.log(currentPageData, hasPrevPage, hasNextPage);

  const items = currentPageData.items;

  return (
    <Layout>
      <PhotosListHeaderView />
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "100%",
            }}
          >
            {hasPrevPageData && (
              <ArrowButtonComponent
                direction="left"
                onButtonClick={fetchPrevPagePhotos}
              />
            )}
          </div>
          <PhotosListItemView items={items} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "100%",
            }}
          >
            {hasNextPageData && (
              <ArrowButtonComponent
                direction="right"
                onButtonClick={fetchNextPagePhotos}
              />
            )}
          </div>
        </div>
      </Suspense>
    </Layout>
  );
};
