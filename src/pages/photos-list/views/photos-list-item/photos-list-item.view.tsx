import { FC } from "react";
import styled from "styled-components";
import {
  ArrowButtonComponent,
  ImageContentsComponent,
} from "../../../../components";
import { Link } from "react-router-dom";

type IPhotosListItemViewProps = {
  item: {
    content: string;
    createdAt: string;
    id: number;
    photoUrl: string[];
    title: string;
    username: string;
  };
  fetchPrevPagePhotos: () => void;
  fetchNextPagePhotos: () => void;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
};

export const PhotosListItemView: FC<IPhotosListItemViewProps> = ({
  item,
  fetchPrevPagePhotos,
  fetchNextPagePhotos,
  hasNextPage,
  hasPreviousPage,
}) => {
  const { id, title, photoUrl } = item;

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
        {hasPreviousPage && (
          <ArrowButtonComponent
            direction="left"
            onButtonClick={fetchPrevPagePhotos}
          />
        )}
      </div>
      <div style={{ flex: 1 }}>
        <CardGrid>
          {photoUrl.map((url) => {
            if (url) {
              return (
                <Link
                  to={`/list/${id}/detail`}
                  key={id}
                  style={{ textDecoration: "none" }}
                >
                  <ImageContentsComponent
                    imageUrls={photoUrl}
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
        {hasNextPage && (
          <ArrowButtonComponent
            direction="right"
            onButtonClick={fetchNextPagePhotos}
          />
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
