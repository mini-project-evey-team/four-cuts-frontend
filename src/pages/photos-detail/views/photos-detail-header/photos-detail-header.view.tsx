import { FC } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../../../components";
type IPhotosDetailHeaderViewProps = {};

export const PhotosDetailHeaderView: FC<
  IPhotosDetailHeaderViewProps
> = ({}) => {
  return (
    <HeaderWrapper>
      <Link to="/list">
        <Button attribute="filled" size="medium">
          Back
        </Button>
      </Link>
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
