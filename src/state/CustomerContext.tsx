import React, { createContext, useReducer } from "react";
import { CustomerType, TransactionsBucketType } from "../models/ts/types";
import { useLocalData } from "../hooks/useLocalData";

export interface ICustomerState {
   customer: CustomerType | null;
   account: number | null;
   transactions: TransactionsBucketType[] | null;
}

const initialState: ICustomerState = {
   customer: null,
   account: null,
   transactions: null,
};

export type CustomerActionType =
   | { type: "RESET_CUSTOMER" }
   | {
        type: "UPDATE_CUSTOMER";
        payload: CustomerType;
     }
   | { type: "RESET_ACCOUNT" }
   | {
        type: "UPDATE_ACCOUNT";
        payload: number;
     };

export const CustomerContext = createContext<{
   state: typeof initialState;
   dispatch: React.Dispatch<CustomerActionType>;
}>({
   state: initialState,
   dispatch: () => {},
});

const reducer = (state: typeof initialState, action: CustomerActionType) => {
   switch (action.type) {
      case "UPDATE_CUSTOMER":
         const { transactions } = useLocalData();
         const sortedAccounts =
            action.payload?.accounts.sort((a, b) => a - b) || [];
         let allTransactions: TransactionsBucketType[] | [] = [];

         sortedAccounts.forEach((account, accountIndex) => {
            const transactionBucket = transactions.filter(
               (trans) => trans.account_id === account
            );
            allTransactions[accountIndex] = transactionBucket[0];
         });

         // const updatedTransactions = Object.values(
         //    filteredTransactions[0].transactions
         // ) as TransactionType[];

         // const updatedAccounts = Object.values(
         //    filteredTransactions[0].transactions
         // ) as TransactionType[];

         return {
            transactions: allTransactions,
            customer: action.payload,
            account: null,
         };

      case "RESET_CUSTOMER":
         return { ...state, account: null };

      case "UPDATE_ACCOUNT":
         return {
            ...state,
            account: action.payload,
         };
      case "RESET_ACCOUNT":
         return { ...state, account: null, transactions: null };

      default:
         return state;
   }
};

interface ICustomerProviderProps {
   children: React.ReactNode;
}

const CustomerProvider = ({ children }: ICustomerProviderProps) => {
   // ToFix
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <CustomerContext.Provider value={{ state, dispatch }}>
         {children}
      </CustomerContext.Provider>
   );
};

export default CustomerProvider;
