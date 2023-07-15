import { FC } from "react";
import styled from "styled-components";
import { ImageContentsComponent } from "../../../components";
import { HAPPYCAT_URL } from "../../../components/happy-cat";
import { Link } from "react-router-dom";

type IPhotosListItemViewProps = {};

const data = [
  {
    id: "1",
    title: "dd",
    contents: "asd",
    imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
  },
  {
    id: "2",
    title: "dd",
    contents: "asd",
    imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
  },
  {
    id: "3",
    title: "dd",
    contents: "asd",
    imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
  },
  {
    id: "4",
    title: "dd",
    contents: "asd",
    imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
  },
  {
    id: "5",
    title: "dd",
    contents: "asd",
    imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
  },
  {
    id: "6",
    title: "dd",
    contents: "asd",
    imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
  },
];

export const PhotosListItemView: FC<IPhotosListItemViewProps> = ({}) => {
  const cards = Array(6).fill(0);

  return (
    <div style={{ display: "flex", width: "100%", height: "auto" }}>
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "100%",
        }}
      ></div>
      <div style={{ flex: 1, paddingTop: 20 }}>
        <CardGrid>
          {cards.map((_, i) => {
            const imagesData = data[i];

            return (
              <Link to={"/list/1/detail"} key={i}>
                <ImageContentsComponent fourPhotos={imagesData} width="200px" />
              </Link>
            );
          })}
        </CardGrid>
      </div>
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "100%",
        }}
      ></div>
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
