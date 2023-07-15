import { FC, ReactNode } from "react";
type IPhotosMainLayoutProps = {
  children: ReactNode;
};

export const PhotosMainLayout: FC<IPhotosMainLayoutProps> = ({ children }) => {
  return <>{children}</>;
};
