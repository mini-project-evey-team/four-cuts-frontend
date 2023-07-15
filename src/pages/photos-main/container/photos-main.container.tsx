import { FC } from "react";
import { HeaderView } from "../views";
import { Layout } from "../../../styles";
import { Link } from "react-router-dom";

type IPhotosMainContainerProps = {};

export const PhotosMainContainer: FC<IPhotosMainContainerProps> = ({}) => {
  return (
    <Layout>
      <HeaderView />
      <Link to="/list">to list page</Link>
      <Link to="/post">to post page</Link>
      <Link to="/list/:id/detail">detail page</Link>
    </Layout>
  );
};
