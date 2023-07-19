import { FC } from "react";
import { SignUpFormView, SignUpHeaderView } from "../view";
type ISignUpContainerProps = {};

export const SignUpContainer: FC<ISignUpContainerProps> = ({}) => {
  return (
    <>
      <SignUpHeaderView />
      <SignUpFormView />
    </>
  );
};
