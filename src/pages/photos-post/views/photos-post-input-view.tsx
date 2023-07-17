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

  console.log(watch());

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
        <SecondInnerDiv>
          <ResetControllerDiv>
            <PhotosPostResetController />
          </ResetControllerDiv>
          <PhotosPostAllPhotosController />
        </SecondInnerDiv>
        <SecondInnerDiv>
          <ResetControllerDiv>
            <Button size="medium" attribute="empty" onClick={submit}>
              Submit
            </Button>
          </ResetControllerDiv>
          <Button size="medium" attribute="empty">
            Cancel
          </Button>
        </SecondInnerDiv>
      </div>
      {/* <button type="submit" value="Upload" onSubmit={submit} /> */}
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

const SecondInnerDiv = styled.div`
  display: flex;
  width: 400px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-right: 20px;
  padding-left: 20px;
`;

const ResetControllerDiv = styled.div`
  display: flex;
  flex: 1;
`;
