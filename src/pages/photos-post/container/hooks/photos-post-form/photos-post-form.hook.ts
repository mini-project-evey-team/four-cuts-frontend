import { useForm } from "react-hook-form";

export const usePostForm = () => {
  // 관리 될 form 의 초기값
  const defaultValues = {
    title: "",
    contents: "",
    imageUrls: [null, null, null, null],
    imageFiles: ["", "", "", ""],
  };

  // react-hook-form이 제공해주는 form 관리 hook
  const form = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: "all",
  });

  return { form };
};
