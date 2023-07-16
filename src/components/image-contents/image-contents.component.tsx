import { FC } from "react";
import { ImageFrameComponent } from "../image-frame";
import styled from "styled-components";
type IImageContentsComponentProps = {
  fourPhotos: {
    id: string;
    title: string;
    contents: string;
    imageUrl: string[];
  };
  width: string;
};

export const ImageContentsComponent: FC<IImageContentsComponentProps> = ({
  fourPhotos,
  width,
}) => {
  const { title, imageUrl } = fourPhotos;
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageFrameComponent title={title} width={width} fontSize="20px">
        {imageUrl.map((e, i) => {
          return <StyledImage src={e} key={i} />;
        })}
      </ImageFrameComponent>
    </div>
  );
};

const StyledImage = styled.img`
  width: 50%;
  height: 50%;
  objectfit: cover;
  padding: 2px;
`;
