import { FC } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";

import styled from "styled-components";
import imageCompression from "browser-image-compression";
import { IPhotosPostFormData } from "../../../container";
import { Button } from "../../../../../components";

type IPhotosPostAllPhotosControllerProps = {};

export const PhotosPostAllPhotosController: FC<
  IPhotosPostAllPhotosControllerProps
> = ({}) => {
  const { control } = useFormContext<IPhotosPostFormData>();

  const {
    field: { onChange: onChangeImageFiles },
  } = useController({
    control: control,
    name: "imageFiles",
  });

  return (
    <Controller
      control={control}
      name="imageUrls"
      render={({ field: { onChange } }) => {
        const handleFileUpload = async (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          const files = e.target.files;

          const compressedFiles: File[] = [];

          if (files) {
            if (files.length !== 4) {
              alert("4개의 이미지를 넣어주세요");
              e.target.value = "";

              return;
            }
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

          e.target.value = "";
        };
        return (
          <ContainerDiv>
            <InnerDiv>
              <Button size="small" attribute="empty">
                Select All
                <StyledInput type="file" multiple onChange={handleFileUpload} />
              </Button>
            </InnerDiv>
          </ContainerDiv>
        );
      }}
    />
  );
};

const ContainerDiv = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerDiv = styled.div`
  position: absolute;
`;

const StyledInput = styled.input`
  color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 20px;
  opacity: 0;
`;
