import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import styled from "styled-components";
import { IPhotosPostFormData } from "../../../container";
type IPhotosPostContentsControllerProps = {};

export const PhotosPostContentsController: FC<
  IPhotosPostContentsControllerProps
> = ({}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPhotosPostFormData>();

  return (
    <Controller
      control={control}
      name={"content"}
      rules={{
        required: "Content is required",
        validate: (value) =>
          value.trim().length < 500 ||
          "Content should not exceed 500 characters",
      }}
      render={({ field: { value, onChange } }) => {
        return (
          <>
            <TextArea
              value={value}
              placeholder="Content"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (e.target.value.trim().length > 500) {
                  return;
                }
                onChange(e);
              }}
            />

            {errors.content && (
              <ErrorMessage>{errors.content.message}</ErrorMessage>
            )}
          </>
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
