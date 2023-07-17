import {
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import { IPhotosPostFormData } from "../photos-post-form";
import { useCallback } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-3-35-216-160.ap-northeast-2.compute.amazonaws.com:8080",
  headers: {},
});

export const usePhotosPostSubmit = () => {
  const { handleSubmit } = useFormContext<IPhotosPostFormData>();
  const onFormError: SubmitErrorHandler<IPhotosPostFormData> = useCallback(
    (errors) => {
      alert(JSON.stringify(errors));
    },
    []
  );

  const onFormSubmit: SubmitHandler<IPhotosPostFormData> = useCallback(
    async (data) => {
      try {
        const res = await instance.post("/api/post", data);

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
    handleSubmit(onFormSubmit, onFormError)();
  };
  return { submit };
};
