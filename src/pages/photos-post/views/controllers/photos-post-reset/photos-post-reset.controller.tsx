import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { IPhotosPostFormData } from "../../../container";
import { Button } from "../../../../../components";

type IPhotosPostResetControllerProps = {};

export const PhotosPostResetController: FC<
  IPhotosPostResetControllerProps
> = ({}) => {
  const { control } = useFormContext<IPhotosPostFormData>();

  const {
    field: { onChange: onChangeImageFiles },
  } = useController({
    control: control,
    name: "imageFiles",
  });

  const {
    field: { onChange: onChangeImageUrls },
  } = useController({
    control: control,
    name: "imageUrls",
  });

  const handlePressButton = () => {
    onChangeImageFiles([]);
    onChangeImageUrls([]);
  };

  return (
    <Button size="small" attribute="empty" onClick={handlePressButton}>
      Reset
    </Button>
  );
};
