import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IPhotosPostFormData } from "../../../container";
import styled from "styled-components";
type IPhotosPostInputControllerProps = {};

export const PhotosPostInputController: FC<
  IPhotosPostInputControllerProps
> = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPhotosPostFormData>();

  return (
    <Controller
      control={control}
      name={"title"}
      rules={{
        required: "Title is required",
        validate: (value) =>
          value.trim().length < 11 || "Input should not exceed 11 characters",
      }}
      render={({ field: { value, onChange } }) => {
        return (
          <div>
            <Input
              type="text"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.trim().length > 11) {
                  return;
                }
                onChange(e);
              }}
            />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </div>
        );
      }}
    />
  );
};

const Input = styled.input`
  border: 2px solid #cbd5e0;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  color: black;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
