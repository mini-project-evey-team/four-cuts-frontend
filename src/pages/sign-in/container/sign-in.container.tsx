import { FC } from "react";
import { SignInFormView, SignInHeaderView } from "../view";

type ISignInContainerProps = {};

export const SignInContainer: FC<ISignInContainerProps> = ({}) => {
  return (
    <>
      <SignInHeaderView />
      <SignInFormView />
    </>
  );
};
