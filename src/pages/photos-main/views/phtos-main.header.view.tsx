import { FC } from "react";
import { Button } from "../../../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
type IPhtosMainHeaderViewProps = {};

export const PhotosMainHeaderView: FC<IPhtosMainHeaderViewProps> = ({}) => {
  return (
    <HeaderWrapper>
      <Link to="/login">
        <Button attribute="empty" size="small">
          Login
        </Button>
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 80px 20px 80px;
  background-color: #ffe1e7;
`;
