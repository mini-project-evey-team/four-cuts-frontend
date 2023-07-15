import { FC, ReactNode } from "react";
import styled from "styled-components";
type IImageFrameComponentProps = {
  children: ReactNode;
  title: string;
  width: string;
  fontSize?: string;
};

export const ImageFrameComponent: FC<IImageFrameComponentProps> = ({
  children,
  title,
  width,
  fontSize = "20px",
}) => {
  return (
    <Wrapper>
      <Frame width={width}>
        <ImageContainer>{children}</ImageContainer>
      </Frame>
      <Bottom width={width} fontSize={fontSize}>
        {title}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Frame = styled.div<{ width: string }>`
  padding: ${(props) => parseInt(props.width) * 0.045}px
    ${(props) => parseInt(props.width) * 0.045}px
    ${(props) => parseInt(props.width) * 0.07}px;
  background-color: black;
  aspect-ratio: 155/190;
  width: ${(props) => props.width};
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 155 / 190;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const Bottom = styled.div<{ width: string; fontSize: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  padding: 0px 0px ${(props) => parseInt(props.width) * 0.07}px 0px;
  background-color: black;
  color: white;
  font-size: ${(props) => props.fontSize};
`;
