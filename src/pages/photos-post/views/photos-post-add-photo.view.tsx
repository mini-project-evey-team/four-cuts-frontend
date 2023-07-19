import { FC } from "react";
import { ImageFrameComponent } from "../../../components";
import { PhotosPostImageInputComponent } from "../components";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { IPhotosPostFormData } from "../container";

type IPhotosPostAddPhotoViewProps = {};

export const PhotosPostAddPhotoView: FC<
  IPhotosPostAddPhotoViewProps
> = ({}) => {
  const { watch } = useFormContext<IPhotosPostFormData>();

  return (
    <MainDiv>
      <FirstInnerDiv>
        <ImageFrameComponent title={watch("title")} width="440px">
          <GridDiv>
            <PhotosPostImageInputComponent index={0} />
            <PhotosPostImageInputComponent index={1} />
            <PhotosPostImageInputComponent index={2} />
            <PhotosPostImageInputComponent index={3} />
          </GridDiv>
        </ImageFrameComponent>
      </FirstInnerDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FirstInnerDiv = styled.div`
  display: flex;
  flex: 5;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;
