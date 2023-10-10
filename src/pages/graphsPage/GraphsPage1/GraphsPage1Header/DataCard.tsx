import React from "react";
import { ICtxProps } from "../GraphsPage1Section";
import {
   getSingleCodeTransactions,
   getTransactionsTotal,
   getTransactionsTotalAmount,
} from "../../../../utils/transaction";

interface props extends ICtxProps {
   transactionCode: "buy" | "sell";
}

const DataCard: React.FC<props> = ({ ctx, transactionCode }) => {
   const customerName = ctx.customer?.name;

   if (!transactionCode) {
      return <></>;
   }

   const sortedTransactions = getSingleCodeTransactions(ctx, transactionCode);

   // const price = getTransactionsPrice(sortedTransactions);
   // const date = getTransactionsDate(sortedTransactions);
   // const amount = getTransactionsAmount(sortedTransactions);
   const total = getTransactionsTotal(sortedTransactions);
   const totalAmount = getTransactionsTotalAmount(sortedTransactions);
   const totalTransactions = total.length;
   const numberOfTransactionsString = `${totalTransactions} ${transactionCode} transaction${
      totalTransactions >= 2 ? "s" : ""
   }`;
   const highest =
      sortedTransactions.length >= 1
         ? [...sortedTransactions.sort((a, b) => a.amount - b.amount)][
              sortedTransactions.length - 1
           ]
         : null;

   const content = !highest ? (
      `${customerName} has no ${transactionCode} transaction.`
   ) : (
      <article>
         <p>
            {`${customerName} has ${numberOfTransactionsString} for a total of $${totalAmount}.`}
         </p>
         <p>
            {`${customerName}'s highest ${transactionCode} transaction amount is $${highest.amount} for the ${highest.symbol} company.`}
         </p>
      </article>
   );

   return <article className="p-2">{content}</article>;
};
export default DataCard;
