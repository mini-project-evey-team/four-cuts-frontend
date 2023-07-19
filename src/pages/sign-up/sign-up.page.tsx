import { FC } from "react";
import { SignUpContainer } from "./container";
import { Layout } from "../../styles";
type ISignUpPageProps = {};

export const SignUpPage: FC<ISignUpPageProps> = ({}) => {
  return (
    <Layout>
      <SignUpContainer />
    </Layout>
  );
};
