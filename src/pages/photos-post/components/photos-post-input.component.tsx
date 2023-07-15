import { FC, useState } from "react";
type IPhotosPostInputComponentProps = {};

export const PhotosPostInputComponent: FC<
  IPhotosPostInputComponentProps
> = ({}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
