import { FC } from "react";
import { LoginFormContainer } from "./container";
import { Layout } from "../../styles";

type ILoginPageProps = {};

export const LoginPage: FC<ILoginPageProps> = ({}) => {
  return (
    <Layout>
      <LoginFormContainer />
    </Layout>
  );
};
