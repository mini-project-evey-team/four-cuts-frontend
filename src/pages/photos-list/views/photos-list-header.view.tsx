import { FC } from "react";
import styled from "styled-components";
import { Button } from "../../../components";
import { Link } from "react-router-dom";

type IPhotosListHeaderViewProps = {};

export const PhotosListHeaderView: FC<IPhotosListHeaderViewProps> = ({}) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Button attribute="filled" size="medium">
          HOME
        </Button>
      </Link>
      <Link to="/post">
        <Button attribute="empty" size="small">
          만들기
        </Button>
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px 0px 200px;
  background-color: #ffe1e7;
`;
