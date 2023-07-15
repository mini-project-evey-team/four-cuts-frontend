import { FC } from "react";
import { ImageFrameComponent } from "../../../components";
import { HAPPYCAT_URL } from "../../../components/happy-cat";
import styled from "styled-components";

type IPhotosPostAddPhotoViewProps = {};

export const PhotosPostAddPhotoView: FC<IPhotosPostAddPhotoViewProps> = () => {
  const fourPhotos = Array(4).fill(HAPPYCAT_URL);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageFrameComponent title="ss" width="400px" fontSize="20px">
        {fourPhotos.map((e, i) => (
          <StyledImage src={e} key={i} />
        ))}
      </ImageFrameComponent>
    </div>
  );
};

const StyledImage = styled.img`
  width: 50%;
  height: 50%;
  objectfit: cover;
`;
