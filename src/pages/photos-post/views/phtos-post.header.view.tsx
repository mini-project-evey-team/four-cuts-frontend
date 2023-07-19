import { FC } from "react";
import { Button } from "../../../components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
type IPhotosPostHeaderViewProps = {};

export const PhotosPostHeaderView: FC<IPhotosPostHeaderViewProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Button attribute="empty" size="medium" onClick={() => navigate(-1)}>
        Back
      </Button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px 20px 200px;
  background-color: #ffe1e7;
`;
