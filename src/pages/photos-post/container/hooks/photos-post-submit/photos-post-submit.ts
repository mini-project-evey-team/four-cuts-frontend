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
  const { handleSubmit, watch } = useFormContext<IPhotosPostFormData>();

  const onFormError: SubmitErrorHandler<IPhotosPostFormData> = useCallback(
    async (error) => {
      const { title, content } = error;
      const imageFiles = watch("imageFiles");

      if (title) {
        alert("제목을 적어주세요");
      }

      if (content) {
        alert("내용을 적어주세요");
      }

      if (imageFiles.some((e) => !e)) {
        alert("사진을 4개 넣어주세요");
      }
    },
    []
  );

  const onFormSubmit: SubmitHandler<IPhotosPostFormData> = useCallback(
    async (data) => {
      if (data.imageFiles.some((image) => !image)) {
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

        if (res.status === 200) {
          alert("사진 업로드에 성공하였습니다!");
          navigate("/list");
        }
      } catch (error) {
        alert("사진 업로드에 실패하였습니다!");
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
