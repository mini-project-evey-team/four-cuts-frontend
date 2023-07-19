import axios from "axios";

export const fetchData = () => {
  const instance = axios.create({
    baseURL: "https://four-cut.store:8080/",
    headers: {},
  });

  const getPhotosList = async ({ pageParam = 1 }) => {
    try {
      const res = await instance.get("/api/post", {
        params: {
          page: pageParam,
        },
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getPhotosList,
  };
};
