import { FC } from "react";
import {
  PhotosDetailContentView,
  PhotosDetailHeaderView,
  PhotosDetailImageView,
} from "../views";
import { Layout } from "../../../styles";
import { useParams } from "react-router-dom";
import { useDetailData } from "./hooks";
import { useQuery } from "react-query";

type IPhotosDetailContainerProps = {};

export const PhotosDetailContainer: FC<IPhotosDetailContainerProps> = ({}) => {
  const { id } = useParams();
  const { getDetailData } = useDetailData(id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["photosDetail"],
    queryFn: getDetailData,
  });

  console.log(data, isLoading, error);

  // const { data, error, isLoading } = useQuery(["photosDetail", id], () =>
  //   fetchDetailData(id).getPhotosDetail()
  // );

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error</div>;

  // console.log(data);

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
          <PhotosDetailImageView />
        </div>
        <div style={{ flex: 1, paddingTop: 40 }}>
          <PhotosDetailContentView />
        </div>
      </div>
    </Layout>
  );
};
