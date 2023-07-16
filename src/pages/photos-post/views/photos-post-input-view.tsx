import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  useForm,
  SubmitHandler,
  useFormContext,
  Controller,
} from "react-hook-form";

import styled from "styled-components";

import { IPhotosPostFormData, usePhotosPostSubmit } from "../container";

export const PhotosPostInputView = () => {
  const { control } = useFormContext<IPhotosPostFormData>();

  const { submit } = usePhotosPostSubmit();

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
          const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files;

            if (file) {
              const tempImages: (string | ArrayBuffer | null)[] = [];
              for (let i = 0; i < file.length; i++) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  tempImages.push(reader.result);
                  if (tempImages.length === file.length) {
                    onChange(tempImages.map((image) => image!.toString()));
                  }
                };
                reader.readAsDataURL(file[i]);
              }
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
