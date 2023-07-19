import { FC } from "react";
import { ImageContentsComponent } from "../../../../components";

type IPhotosDetailImageViewProps = {
  title: string;
  photoUrl: string[];
};

export const PhotosDetailImageView: FC<IPhotosDetailImageViewProps> = ({
  title,
  photoUrl,
}) => {
  return (
    <ImageContentsComponent imageUrls={photoUrl} title={title} width="400px" />
  );
};
