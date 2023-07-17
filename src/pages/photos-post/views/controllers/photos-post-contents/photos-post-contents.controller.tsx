import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import styled from "styled-components";
import { IPhotosPostFormData } from "../../../container";
type IPhotosPostContentsControllerProps = {};

export const PhotosPostContentsController: FC<
  IPhotosPostContentsControllerProps
> = ({}) => {
  const { control } = useFormContext<IPhotosPostFormData>();

  return (
    <Controller
      control={control}
      name={"contents"}
      render={({ field: { value, onChange } }) => {
        return (
          <TextArea
            value={value}
            placeholder="Content"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              onChange(e);
            }}
          />
        );
      }}
    />
  );
};

const TextArea = styled.textarea`
  border: 2px solid #cbd5e0;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  color: black;
  height: 400px;
`;
