import { FC } from "react";
import {
  PhotosDetailContentView,
  PhotosDetailHeaderView,
  PhotosDetailImageView,
} from "../views";
import { Layout } from "../../../styles";
import { useParams } from "react-router-dom";
import { useDetailData } from "./hooks";
import { useQuery } from "@tanstack/react-query";

type IPhotosDetailContainerProps = {};

export const PhotosDetailContainer: FC<IPhotosDetailContainerProps> = ({}) => {
  const { id } = useParams();
  const { getDetailData } = useDetailData(id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["photosDetail"],
    queryFn: getDetailData,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    console.log(error);
    return;
  }

  const { title, content, photoUrl } = data;
  return (
    <Layout>
      <PhotosDetailHeaderView />
      <div
        style={{
          display: "flex",
          height: "-webkit-fill-available",
          padding: "0px 200px 0px 200px",
          gap: 100,
        }}
      >
        <div style={{ flex: 1, paddingTop: 30 }}>
          <PhotosDetailImageView title={title} photoUrl={photoUrl} />
        </div>
        <div style={{ flex: 1, paddingTop: 40 }}>
          <PhotosDetailContentView title={title} content={content} />
        </div>
      </div>
    </Layout>
  );
};
