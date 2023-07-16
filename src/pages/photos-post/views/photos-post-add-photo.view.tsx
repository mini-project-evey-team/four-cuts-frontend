import { FC } from "react";
import { ImageContentsComponent } from "../../../components";
import { useFormContext } from "react-hook-form";

type IPhotosPostAddPhotoViewProps = {};

export const PhotosPostAddPhotoView: FC<
  IPhotosPostAddPhotoViewProps
> = ({}) => {
  const { watch } = useFormContext<{
    title: string;
    contents: string;
    imageUrls: string[];
  }>();

  return (
    <ImageContentsComponent
      title={watch("title")}
      imageUrls={watch("imageUrls")}
      width="400px"
    />
  );
};
