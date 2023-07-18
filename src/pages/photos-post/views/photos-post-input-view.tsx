import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { IPhotosPostFormData, usePhotosPostSubmit } from "../container";
import {
  PhotosPostInputController,
  PhotosPostContentsController,
  PhotosPostResetController,
  PhotosPostAllPhotosController,
} from "./controllers";
import { Button } from "../../../components";

export const PhotosPostInputView = () => {
  const { watch } = useFormContext<IPhotosPostFormData>();

  const { submit } = usePhotosPostSubmit();

  // console.log(watch());

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          aspectRatio: 155 / 190,
        }}
      >
        <PhotosPostInputController />
        <PhotosPostContentsController />
        <ButtonWrapperDiv>
          <FlexOneDiv>
            <PhotosPostResetController />
          </FlexOneDiv>
          <FlexOneDiv>
            <PhotosPostAllPhotosController />
          </FlexOneDiv>
        </ButtonWrapperDiv>
        <ButtonWrapperDiv>
          <FlexOneDiv>
            <Button size="large" attribute="filled" onClick={submit}>
              Submit
            </Button>
          </FlexOneDiv>
        </ButtonWrapperDiv>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  border-radius: 0.375rem;
  padding-left: 80px;
  padding-right: 80px;
  align-items: center;
`;

const ButtonWrapperDiv = styled.div`
  display: flex;
  width: 400px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
`;

const FlexOneDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
