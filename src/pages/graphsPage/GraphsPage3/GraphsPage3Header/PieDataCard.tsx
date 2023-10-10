import React from "react";
import {
   getTransactionsBySym,
   getTransactionsTotal,
   getTransactionsTotalAmount,
} from "../../../../utils/transaction";
import { usePieOption } from "../../../../hooks/usePieOption";
import { IDataCardProps } from "../../GraphsPage1/GraphsPage1Header/DataCard";

const PieDataCard: React.FC<IDataCardProps> = ({ ctx, transactionCode }) => {
   const updatedOptions = usePieOption(ctx, transactionCode);

   // const highest =
   //    sortedTransactions.length >= 1
   //       ? [...sortedTransactions.sort((a, b) => a.amount - b.amount)][
   //            sortedTransactions.length - 1
   //         ]
   //       : null;

   const seriesData = updatedOptions?.series[0].data;

   // const syms = getTransactionsBySym(seriesData)

   console.log(updatedOptions);

   return <article className="p-2">{"Pie Data"}</article>;
};
export default PieDataCard;
