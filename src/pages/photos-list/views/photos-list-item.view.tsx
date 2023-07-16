import { FC, useEffect } from "react";
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

  return (
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
        <ArrowButtonComponent direction="left" onButtonClick={goPreviousPage} />
      </div>
      <div style={{ flex: 1, paddingTop: 20 }}>
        <CardGrid>
          {cards.map((_, i) => {
            const sixPhotosArray = currentPageData.items;
            const fourPhotosArray = sixPhotosArray[i];

            return (
              <Link to={`/list/${sixPhotosArray[i].id}/detail`} key={i}>
                <ImageContentsComponent
                  fourPhotos={fourPhotosArray}
                  width="200px"
                />
              </Link>
            );
          })}
        </CardGrid>
        <div>{pageIndex}</div>
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
        <ArrowButtonComponent direction="right" onButtonClick={goNextPage} />
      </div>
    </div>
  );
};

const CardGrid = styled.div`
  display: grid;
  gap: 20px;
  height: 100%;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
`;
