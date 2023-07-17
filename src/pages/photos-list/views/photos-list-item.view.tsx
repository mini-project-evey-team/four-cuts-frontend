import { FC } from "react";
import styled from "styled-components";
import {
  ArrowButtonComponent,
  ImageContentsComponent,
} from "../../../components";
import { Link } from "react-router-dom";
import { useFetch } from "../container/hooks";

type IPhotosListItemViewProps = {};

export const PhotosListItemView: FC<IPhotosListItemViewProps> = ({}) => {
  const { currentPageData, goPreviousPage, goNextPage, pageIndex } = useFetch();

  const cards = Array(6).fill(0);

  const isLastPage = currentPageData.isLastPage;
  const isFirstPage = pageIndex === 1;

  return (
    <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "100%",
        }}
      >
        {!isFirstPage && (
          <ArrowButtonComponent
            direction="left"
            onButtonClick={goPreviousPage}
          />
        )}
      </div>
      <div style={{ flex: 1 }}>
        <CardGrid>
          {cards.map((_, i) => {
            const sixPhotosArray = currentPageData.items;

            if (sixPhotosArray?.[i]) {
              const fourPhotosArray = sixPhotosArray[i];
              const imageUrlsArray = fourPhotosArray.imageUrl;
              const title = fourPhotosArray.title;

              return (
                <Link
                  to={`/list/${sixPhotosArray[i].id}/detail`}
                  key={i}
                  style={{ textDecoration: "none" }}
                >
                  <ImageContentsComponent
                    imageUrls={imageUrlsArray}
                    title={title}
                    width="200px"
                  />
                </Link>
              );
            }
          })}
        </CardGrid>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "100%",
        }}
      >
        {!isLastPage && (
          <ArrowButtonComponent direction="right" onButtonClick={goNextPage} />
        )}
      </div>
    </div>
  );
};

const CardGrid = styled.div`
  display: grid;
  gap: 60px;
  height: 100%;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
`;
