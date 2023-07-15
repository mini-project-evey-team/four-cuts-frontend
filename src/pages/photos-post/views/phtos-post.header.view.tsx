import { FC } from "react";
import { Button } from "../../../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
type IPhtosPostHeaderViewProps = {};

export const PhtosPostHeaderView: FC<IPhtosPostHeaderViewProps> = ({}) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Button attribute="filled" size="medium">
          HOME
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
