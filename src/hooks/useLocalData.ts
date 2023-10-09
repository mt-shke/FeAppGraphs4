import accountsData from "../../localData/accounts.json";
import customersData from "../../localData/customers.json";
import transactionsData from "../../localData/transactions.json";
import {
   AccountType,
   CustomerType,
   TransactionsBucketType,
} from "../models/ts/types";

export const useLocalData = () => {
   const accounts = accountsData as AccountType[];
   const customers = customersData as CustomerType[];
   const transactions = transactionsData as TransactionsBucketType[];

   return { accounts, customers, transactions };
};
