import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IPhotosPostFormData } from "../../../container";
import styled from "styled-components";
type IPhotosPostInputControllerProps = {};

export const PhotosPostInputController: FC<
  IPhotosPostInputControllerProps
> = () => {
  const { control } = useFormContext<IPhotosPostFormData>();

  return (
    <Controller
      control={control}
      name={"title"}
      render={({ field: { value, onChange } }) => {
        return (
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
