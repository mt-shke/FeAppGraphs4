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

export const useLocalStorageData = () => {
   const localData = window.localStorage.getItem("data");
   if (localData) {
      const parsedData = JSON.parse(localData);
      return parsedData;
   }
   return null;
};

export const useQueryData = () => {
   const accounts = useQueryPathApi("accounts");
   const customers = useQueryPathApi("customers");
   const transactions = useQueryPathApi("transactions");
   if (accounts.data && customers.data && transactions.data) {
      const localData = window.localStorage.getItem("data");
      if (!localData) {
         const data = {
            customers: customers.data,
            accounts: accounts.data,
            transactions: transactions.data,
         };
         window.localStorage.setItem("data", JSON.stringify(data));
      }
   }

   if (!customers) {
      return null;
   }

   return customers.data;
};
