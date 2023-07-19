import { FC } from "react";
import { Layout } from "../../styles";
import { SignInContainer } from "./container";

type ILoginPageProps = {};

export const SignInPage: FC<ILoginPageProps> = ({}) => {
  return (
    <Layout>
      <SignInContainer />
    </Layout>
  );
};
