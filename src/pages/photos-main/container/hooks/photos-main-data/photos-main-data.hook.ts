import { useQuery } from "@tanstack/react-query";
import { fetchMainData } from "../../../api";

export const usePhotosMainData = () => {
  const { getMainPhotos } = fetchMainData();
  const { data, isLoading } = useQuery({
    queryKey: ["photosMain"],
    queryFn: getMainPhotos,
  });

  if (isLoading) {
    return {
      loading: true,
      photoUrls: [] as string[],
    };
  }

  const photoUrls = data?.photoUrls;

  return { loading: isLoading, photoUrls };
};
