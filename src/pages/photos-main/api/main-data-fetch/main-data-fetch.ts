import axios from "axios";

export const fetchMainData = () => {
  const instance = axios.create({
    baseURL: "https://four-cut.store:8080/",
    headers: {},
  });

  const getMainPhotos = async () => {
    try {
      const res = await instance.get("/api/main/photo");

      return res.data as {
        photoUrls: string[];
      };
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getMainPhotos,
  };
};
