import { FC } from "react";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type IPhotosMainTitleViewProps = {};

export const PhotosMainTitleView: FC<IPhotosMainTitleViewProps> = ({}) => {
  return (
    <Container>
      <InnerContainer>
        <Title>
          모여봐요!
          <br /> 인생네컷
        </Title>
        <ButtonGroup>
          <Link to="/post">
            <Button size="small" attribute="empty">
              만들기
            </Button>
          </Link>
          <Link to="/list">
            <Button size="medium" attribute="filled">
              보러가기
            </Button>
          </Link>
        </ButtonGroup>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const move = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Title = styled.div`
  font-size: 68px;
  font-weight: 700;
  animation: ${move} 2s ease-in-out infinite;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 30px;
`;
