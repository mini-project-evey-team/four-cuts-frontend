import {
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import { useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://four-cut.store:8080/",
  headers: {},
});

interface IPhotosPostFormData {
  title: string;
  content: string;
  imageUrls?: string[];
  imageFiles: File[];
}

export const usePhotosPostSubmit = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext<IPhotosPostFormData>();

  const onFormError: SubmitErrorHandler<IPhotosPostFormData> = useCallback(
    (errors) => {
      alert(JSON.stringify(errors));
    },
    []
  );

  const onFormSubmit: SubmitHandler<IPhotosPostFormData> = useCallback(
    async (data) => {
      console.log(data);
      if (data.imageFiles.some((image) => !image)) {
        alert("모든 이미지 필드에 파일을 업로드해주세요.");
        return;
      }

      const formData = new FormData();

      formData.append(
        "post",
        new Blob(
          [
            JSON.stringify({
              title: data.title,
              content: data.content,
              username: "username",
            }),
          ],
          {
            type: "application/json",
          }
        )
      );

      data.imageFiles.forEach((file) => {
        const newFile = new File([file], file.name, { type: file.type });
        formData.append(`photos`, newFile);
      });

      try {
        const res = await instance({
          method: "post",
          url: "api/post",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });

        console.log(res);

        if (res.status === 200) {
          alert("사진 업로드에 성공하였습니다!");
          navigate("/list");
        }
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const submit = () => {
    handleSubmit(onFormSubmit, onFormError)();
  };

  return { submit };
};
