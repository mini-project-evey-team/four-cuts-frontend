import { FC } from "react";
import styled from "styled-components";
import {
  ArrowButtonComponent,
  ImageContentsComponent,
} from "../../../../components";
import { Link } from "react-router-dom";

type IPhotosListItemViewProps = {
  items: {
    content: string;
    createdAt: string;
    id: number;
    photoUrl: string[];
    title: string;
    username: string;
  }[];
};

export const PhotosListItemView: FC<IPhotosListItemViewProps> = ({ items }) => {
  return (
    <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <CardGrid>
          {items.map((item) => {
            if (item) {
              const photoUrl = item.photoUrl;
              const id = item.id;
              const title = item.title;
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
