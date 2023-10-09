import { useQuery } from "@tanstack/react-query";
import { authAxios } from "../api/index";

export const useQueryPathApi = (pathname: string) => {
   const { isLoading, error, data, isFetching } = useQuery({
      queryKey: [pathname],
      queryFn: () => authAxios.get(pathname).then((res) => res.data),
   });

   // const query = async (params: string) => {
   //     const { data } = await authAxios.get(params);
   //     return data;
   // };

   // console.log(`Is ${isLoading ? "" : "no more"} loading for ` + pathname);
   // console.log(`Is ${isFetching ? "" : "no more"} fetching for ` + pathname);

   return { isLoading, error, data, isFetching, pathname };
};

export const useQueryAccounts = () => useQueryPathApi("accounts");
export const useQueryCustomers = () => useQueryPathApi("customers");
export const useQueryTransactions = () => useQueryPathApi("transactions");
