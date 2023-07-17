import { FC, ReactNode } from "react";
import styled from "styled-components";
type IPhotosListLayoutProps = {
  children: ReactNode;
};

export const PhotosListLayout: FC<IPhotosListLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  width: 100%;
`;
