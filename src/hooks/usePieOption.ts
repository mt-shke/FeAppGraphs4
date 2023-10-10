import { useMemo } from "react";
import {
   getSingleCodeTransactions,
   getTransactionCompaniesAmountData,
} from "../utils/transaction";
import { pieOption } from "../utils/echartsOption/pie/pieOption";
import { ICustomerState } from "../state/CustomerContext";

export const usePieOption = (
   ctx: ICustomerState,
   transactionCode: "buy" | "sell"
) => {
   console.log("trancode in usePieOption :", transactionCode);
   const transactionsArray = getSingleCodeTransactions(ctx, transactionCode);
   const transactions = getTransactionCompaniesAmountData(transactionsArray);
   const updatedOptions = useMemo(() => {
      if (!transactionsArray) {
         return pieOption;
      }
      if (transactions.length > 0) {
         const pieUpdated = transactions.map((com: any) => ({
            value: com.totalAmount,
            name: com.sym,
         }));
         return {
            ...pieOption,
            series: [{ ...pieOption.series[0], data: [...pieUpdated] }],
         };
      }
   }, [ctx]);
   return updatedOptions;
};
