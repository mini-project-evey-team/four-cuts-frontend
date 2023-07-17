import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  useForm,
  SubmitHandler,
  useFormContext,
  Controller,
  useController,
} from "react-hook-form";

import styled from "styled-components";

import { IPhotosPostFormData, usePhotosPostSubmit } from "../container";
import imageCompression from "browser-image-compression";

export const PhotosPostInputView = () => {
  const { control, watch } = useFormContext<IPhotosPostFormData>();

  const {
    field: { value, onChange: onChangeImageFiles },
  } = useController({
    control: control,
    name: "imageFiles",
  });

  const { submit } = usePhotosPostSubmit();

  console.log(watch());

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Controller
          control={control}
          name="title"
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
        <Controller
          control={control}
          name="contents"
          render={({ field: { value, onChange } }) => {
            return (
              <TextArea
                value={value}
                placeholder="Content"
                style={{ height: "400px" }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  onChange(e);
                }}
              />
            );
          }}
        />
      </div>
      <Controller
        control={control}
        name="imageUrls"
        render={({ field: { value, onChange } }) => {
          const handleFileUpload = async (
            e: React.ChangeEvent<HTMLInputElement>
          ) => {
            const files = e.target.files;

            const compressedFiles: File[] = [];

            if (files) {
              const tempImages: (string | ArrayBuffer | null)[] = [];

              // for frontend ui
              for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  tempImages.push(reader.result);
                  if (tempImages.length === files.length) {
                    onChange(tempImages.map((image) => image!.toString()));
                  }
                };
                reader.readAsDataURL(files[i]);
              }

              // for store files for backend
              for (let i = 0; i < files.length; i++) {
                const compressedFile = await imageCompression(files[i], {
                  maxSizeMB: 0.5,
                });
                compressedFiles.push(compressedFile);
              }
              onChangeImageFiles(compressedFiles);
            }
          };
          return <Input type="file" multiple onChange={handleFileUpload} />;
        }}
      />
      <Button type="submit" value="Upload" onSubmit={submit} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: white;
  border-radius: 0.375rem;
`;

const Input = styled.input`
  border: 2px solid #cbd5e0;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  color: black;
`;

const ErrorText = styled.p`
  color: #e53e3e;
`;

const ImagePreview = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
  border-radius: 0.375rem;
  margin-top: 0.75rem;
`;

const Button = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  cursor: pointer;
  color: white;
  background-color: #4299e1;
  &:hover {
    background-color: #4299e1;
  }
`;

const TextArea = styled.textarea`
  border: 2px solid #cbd5e0;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  color: black;
`;
