import { FC } from "react";
import {
  ImageContentsComponent,
  ImageFrameComponent,
} from "../../../components";
import { Controller, useController, useFormContext } from "react-hook-form";
import { IPhotosPostFormData, usePhotosPostSubmit } from "../container";
import imageCompression from "browser-image-compression";
import styled from "styled-components";

type IPhotosPostAddPhotoViewProps = {};

export const PhotosPostAddPhotoView: FC<
  IPhotosPostAddPhotoViewProps
> = ({}) => {
  //react-hook-form 이 제공하는 hook으로
  //<FormProvider></FormProvider>에서 관리중인 form데이터를 불러올 수 있음.

  //watch("필드이름") 을 통해, 각 필드에 저장되어있는 데이터를 실시간으로 확인할수있음.
  //인자를 안넣어주면, 전체 데이터를 조회함
  const { control, watch } = useFormContext<IPhotosPostFormData>();

  //react-hook-form이 제공하는 훅으로
  //useController({
  //   control : control,
  //   name : '원하는 필드이름'
  // })
  // 을 통해서, 원하는 필드의 데이터를 가져올 수 있음.
  // 주로 onChange를 사용하고싶을때 사용함
  const {
    field: { value: imageFiles, onChange: onChangeImageFiles },
  } = useController({
    control: control,
    name: "imageFiles",
  });

  // 2x2 그리드에서, 각 index의 upload 버튼과 preview를 렌더링함
  const uploadPreview = (index: number) => {
    // 해당 index에 url이 있는지 확인
    // url이 있으면 image 보여주기
    if (watch("imageUrls")[index]) {
      return (
        <div
          style={{
            width: "100%",
            aspectRatio: 155 / 190,
          }}
        >
          <StyledImage src={watch("imageUrls")[index]} />
        </div>
      );
    }

    return (
      <Controller
        key={index}
        control={control}
        // 내가 바꿀 form 필드명을 적어줌
        name="imageUrls"
        render={({ field: { value, onChange } }) => {
          const handleFileUpload = async (
            e: React.ChangeEvent<HTMLInputElement>
          ) => {
            // input type file 에는 업로드되는순간 e.target.files 에 파일이 저장됨
            const files = e.target.files;

            if (files) {
              const tempImages: (string | ArrayBuffer | null)[] = [];

              // for frontend ui
              for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();

                // reader의 옵션을 설정해는거임
                // onloadend 즉, new FileReader()로 성공적으로 파일리더가 생성되면,
                // 이 함수를 실행하겠다. 라고 설정해준거임
                reader.onloadend = () => {
                  tempImages.push(reader.result);

                  // 원본배열을 훼손하면 안되니까, 복사본을 만듬
                  const currentImageUrls = [...value];
                  // 복사본에서 내가 누른 인풋의 index에 해당하는 위치의 값을 바꿔줌
                  currentImageUrls[index] = tempImages[0]!.toString();

                  onChange([...currentImageUrls]);
                };

                // filreReader를 통해서, 현재 [i] 번쨰 index의 파일을 읽겠다.
                // 실제로 파일을 읽는 곳은 여기임.
                reader.readAsDataURL(files[i]);
              }

              // image resizing한 파일들을 저장할 리스트

              // for store files for backend
              for (let i = 0; i < files.length; i++) {
                const compressedFile = await imageCompression(files[i], {
                  maxSizeMB: 0.5,
                });
                const currentimageFiles = [...imageFiles];
                currentimageFiles[index] = compressedFile;
                onChangeImageFiles([...currentimageFiles]);
              }
            }
          };

          return (
            <div
              style={{
                flex: 1,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ color: "white", position: "absolute" }}>Upload</div>
              <Input type="file" onChange={handleFileUpload} />;
            </div>
          );
        }}
      />
    );
  };

  return (
    <ImageFrameComponent title={watch("title")} width="400px">
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(2,1fr)",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {uploadPreview(0)}
        {uploadPreview(1)}
        {uploadPreview(2)}
        {uploadPreview(3)}
      </div>
    </ImageFrameComponent>
  );
};

const Input = styled.input`
  border-radius: 0.375rem;
  color: black;
  width: 100%;
  aspectratio: 155/190;
  opacity: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 2px;
`;
