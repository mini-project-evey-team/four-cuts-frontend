import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

type IButtonProps = {
  attribute?: "filled" | "empty";
  size?: "large" | "medium" | "small";
  onClick?: () => void;
  children?: ReactNode;
};

export const Button: FC<IButtonProps> = ({
  attribute = "filled",
  size = "large",
  onClick,
  children,
}) => {
  return (
    <StyledButton attribute={attribute} size={size} onClick={onClick}>
      <ButtonContentWrapper>{children}</ButtonContentWrapper>
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  attribute: string;
  size: string;
  flex?: boolean;
}>`
  cursor: pointer;
  border-radius: 20px;
  padding: 10px;

  ${(props) => {
    switch (props.attribute) {
      case "filled":
        return css`
          color: #ffffff;
          background-color: #ff8ea2;
          border: none;
          &:active {
            background-color: #b76574;
          }
        `;
      case "empty":
      default:
        return css`
          color: #ff8ea2;
          background-color: transparent;
          border: 2px solid #ff8ea2;
          &:active {
            background-color: #e5d0d4;
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          width: 300px;
          height: 48px;
          font-weight: 600;
        `;
      case "medium":
        return css`
          width: 150px;
          height: 48px;
          font-size: 15px;
          font-weight: 400;
        `;
      case "small":
      default:
        return css`
          width: 100px;
          height: 48px;
          font-size: 15px;
          font-weight: 400;
        `;
    }
  }}
`;

const ButtonContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
