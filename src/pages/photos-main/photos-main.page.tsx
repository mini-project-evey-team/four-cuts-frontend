import { FC, useEffect } from "react";
import { PhotosMainLayout } from "./layout";
import { PhotosMainContainer } from "./container/photos-main.container";
import axios from "axios";
type IPhotosMainPageProps = {};

export const PhotosMainPage: FC<IPhotosMainPageProps> = ({}) => {
  useEffect(() => {
    const instance = axios.create({
      baseURL: "https://four-cut.store:8080/",
      headers: {},
    });

    const onFormGet = async () => {
      try {
        console.log("try");
        const res = await instance.get("/api/post");
        console.log(123, res);
      } catch (error) {
        console.error(error);
      }
    };

    onFormGet();
  }, []);

  return (
    <PhotosMainLayout>
      <PhotosMainContainer />
    </PhotosMainLayout>
  );
};
