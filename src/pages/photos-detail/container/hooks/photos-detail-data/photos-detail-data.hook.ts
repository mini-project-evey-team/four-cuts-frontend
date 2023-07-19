import { fetchDetailData } from "../../../api";

export const useDetailData = (id) => {
  const getDetailData = async () => {
    try {
      const response = await fetchDetailData(id).getPhotosDetail();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { getDetailData };
};
