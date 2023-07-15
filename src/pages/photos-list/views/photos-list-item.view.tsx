import { FC } from "react";
import { PhotosListCardComponent } from "../components";
import styled from "styled-components";
import { ImageFrameComponent } from "../../../components";

type IPhotosListItemViewProps = {};

export const PhotosListItemView: FC<IPhotosListItemViewProps> = ({}) => {
  const cards = Array(6).fill(0);
  return (
    <CardGrid>
      {cards.map((_, i) => (
        <ImageFrameComponent title="title" width="200px" fontSize="14px">
          <PhotosListCardComponent key={i} />
        </ImageFrameComponent>
      ))}
    </CardGrid>
  );
};

const CardGrid = styled.div`
  display: grid;
  gap: 20px;

  height: 100%;
  padding: 20px 200px 20px 200px;

  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));

  @media (max-width: 1000px) {
    grid-template-columns: 1fr; // 화면이 작을 때는 한 열에 카드 하나만
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); // 화면이 클 때는 한 열에 최대 세 카드
  }
`;
