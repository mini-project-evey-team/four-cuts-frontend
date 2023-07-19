import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type ISignInHeaderViewProps = {};

export const SignInHeaderView: FC<ISignInHeaderViewProps> = ({}) => {
  return (
    <HeaderWrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <BackText>⇠ HOME</BackText>
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 80px 50px 80px;
  background-color: #a2c0ee;
`;

const BackText = styled.div`
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
