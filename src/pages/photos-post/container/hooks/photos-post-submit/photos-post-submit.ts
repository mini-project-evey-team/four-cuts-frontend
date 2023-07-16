import {
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import { IPhotosPostFormData } from "../photos-post-form";
import { useCallback } from "react";

export const usePhotosPostSubmit = () => {
  const { handleSubmit } = useFormContext<IPhotosPostFormData>();

  const onFormError: SubmitErrorHandler<IPhotosPostFormData> = useCallback(
    (errors) => {
      alert(errors);
    },
    []
  );

  const onFormSubmit: SubmitHandler<IPhotosPostFormData> = useCallback(
    async (data) => {
      // submit logic ( send to backend )
    },
    []
  );

  const submit = () => {
    handleSubmit(onFormSubmit, onFormError)();
  };

  return { submit };
};
