import { FC } from "react";
import styled from "styled-components";
type IHeaderViewProps = {};

export const HeaderView: FC<IHeaderViewProps> = ({}) => {
  return <HeaderContainer>홈화면</HeaderContainer>;
};

const HeaderContainer = styled.div`
  display: flex;
  background-color: #ffe1e7;
  width: 100%;
  height: 80px;
`;
