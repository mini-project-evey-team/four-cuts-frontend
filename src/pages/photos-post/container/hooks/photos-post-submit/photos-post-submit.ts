import {
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import { useCallback } from "react";
import axios from "axios";

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
  const { handleSubmit } = useFormContext<IPhotosPostFormData>();
  // const onFormError: SubmitErrorHandler<IPhotosPostFormData> = useCallback(
  //   (errors) => {
  //     alert(JSON.stringify(errors));
  //   },
  //   []
  // );

  const onFormSubmit: SubmitHandler<IPhotosPostFormData> = useCallback(
    async (data) => {
      const formData = new FormData();

      formData.append(
        "post",
        JSON.stringify({
          title: data.title,
          content: data.content,
          username: "new username",
        })
      );

      const Files = [];

      data.imageFiles.forEach((file, index) => {
        const newFile = new File([file], `photo${index}`, { type: file.type });
        formData.append(`photos`, newFile); // 'photos[]'라는 키로 파일 첨부
      });

      // formData;

      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      try {
        const res = await instance({
          method: "post",
          url: "/api/post",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Content-Type": "application/json" },
        });

        console.log(res);

        // if(res.response===200){
        //   navigate
        // }
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const submit = () => {
    handleSubmit(onFormSubmit)();
  };

  return { submit };
};
