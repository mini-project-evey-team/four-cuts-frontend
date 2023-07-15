import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import styled from "styled-components";

type FormInputs = {
  title: string;
  content: string;
  image_url: FileList;
};

const Container = styled.div`
  max-width: 28rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  margin: 2.5rem auto;
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

export const Upload = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const watchedImage = watch("image_url");
  const navigate = useNavigate();

  useEffect(() => {
    if (watchedImage?.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(watchedImage[0]);
    }
  }, [watchedImage]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image_url", data.image_url[0]);

    axios({
      baseURL: "/",
      url: "/api/images",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        alert("upload 완료!");
        navigate(`/`, {});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <form onSubmit={() => {}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <ErrorText>{errors.title.message}</ErrorText>}

          <Input
            type="text"
            placeholder="Content"
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && <ErrorText>{errors.content.message}</ErrorText>}
        </div>

        <Input
          type="file"
          {...register("image_url", { required: "Image is required" })}
        />
        {errors.image_url && <ErrorText>{errors.image_url.message}</ErrorText>}
        {/* {selectedImage && (
          <ImagePreview src={selectedImage.toString()} alt="preview" />
        )} */}
        <Button type="submit" value="Upload" />
      </form>
    </Container>
  );
};

export default Upload;
