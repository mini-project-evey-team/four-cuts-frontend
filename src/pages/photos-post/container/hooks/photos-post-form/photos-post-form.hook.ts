import { useForm } from "react-hook-form";

export const usePostForm = () => {
  const defaultValues = {
    title: "",
    contents: "",
    imageUrls: [],
  };

  const methods = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: "all",
  });

  return { methods };
};
