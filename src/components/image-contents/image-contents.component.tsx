import { FC } from "react";
import { ImageFrameComponent } from "../image-frame";
import styled from "styled-components";

type IImageContentsComponentProps = {
  imageUrls: string[];
  title: string;
  width: string;
};

export const ImageContentsComponent: FC<IImageContentsComponentProps> = ({
  imageUrls,
  title,
  width,
}) => {
  return (
    <StyledOuterDiv>
      <StyledInnerDiv>
        <ImageFrameComponent title={title} width={width} fontSize="20px">
          {imageUrls.map((e, i) => {
            return <StyledImage src={e} key={i} />;
          })}
        </ImageFrameComponent>
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
};

const StyledOuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInnerDiv = styled.div`
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 0px 0px rgba(0, 0, 0, 0);

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 0px 0px rgba(0, 0, 0, 0);
  }
`;

const StyledImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  padding: 2px;
`;
