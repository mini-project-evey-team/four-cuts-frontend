import axios from "axios";

export const fetchDetailData = (postId?: string) => {
  const instance = axios.create({
    baseURL: "https://four-cut.store:8080/",
    headers: {},
  });

  const getPhotosDetail = async () => {
    const requestUrl = `/api/post/${postId}`;
    const res = await instance.get(requestUrl);
    return res.data;
  };

  return {
    getPhotosDetail,
  };
};
