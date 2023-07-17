import { FC } from "react";
import styled from "styled-components";
import {
  PhotosPostResetController,
  PhotosPostAllPhotosController,
} from "./controllers";
type IPhotosPostButtonViewProps = {};

export const PhotosPostButtonView: FC<IPhotosPostButtonViewProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: 200,
        paddingRight: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <SecondInnerDiv>
          <ResetControllerDiv>
            <PhotosPostResetController />
          </ResetControllerDiv>
          <PhotosPostAllPhotosController />
        </SecondInnerDiv>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        <SecondInnerDiv>
          <ResetControllerDiv>
            <PhotosPostResetController />
          </ResetControllerDiv>
          <PhotosPostAllPhotosController />
        </SecondInnerDiv>
      </div>
    </div>
  );
};

const SecondInnerDiv = styled.div`
  display: flex;
  width: 400px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
`;

const ResetControllerDiv = styled.div`
  display: flex;
  flex: 1;
`;
