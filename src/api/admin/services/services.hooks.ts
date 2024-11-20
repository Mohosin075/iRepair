import { useQuery } from "@tanstack/react-query";
import { gerServices } from "./services.api";

export const useGetServices = () => {
  const serviceData = useQuery({
    queryKey: ["services"],
    queryFn: gerServices,
    select: (data) => {
      const services = data?.data.data?.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
  });
  return serviceData;
};
