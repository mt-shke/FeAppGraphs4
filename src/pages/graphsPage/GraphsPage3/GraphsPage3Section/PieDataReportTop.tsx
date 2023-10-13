// @ts-nocheck
import { TransactionType } from "../../../../models/ts/types";
import { dateToEnFormat } from "../../../../utils/dates";

export interface ITransactionsProps {
   transactions: TransactionType[];
}

const PieDataReportTop: React.FC<ITransactionsProps> = ({ transactions }) => {
   const totalTransactions = transactions.length;
   const amounts = transactions.map((item) => item.amount).sort();
   const totalAmount = amounts.reduce((prev, curr) => prev + curr, 0);

   let highest,
      lowest,
      firstTransaction,
      firstTransactionDate,
      lastTransaction,
      lastTransactionDate = "";

   if (totalTransactions >= 1) {
      lowest = amounts[0];
      highest = amounts[amounts.length - 1];
      firstTransaction = transactions[0];
      firstTransactionDate = dateToEnFormat(firstTransaction.date);
      lastTransaction = transactions[transactions.length - 1];
      lastTransactionDate = dateToEnFormat(lastTransaction.date);
   }

   return (
      <article className="p-2">
         <ul className="flex flex-col gap-2">
            <li>
               <h2 className="font-bold">
                  {totalTransactions} {`transactions`}
               </h2>
            </li>
            <li>
               {`Total amount: `}${totalAmount}
            </li>
            <li>
               {`Date of the first transaction: `}
               {firstTransactionDate}
            </li>
            <li>
               {`Date of the last transaction: `}
               {lastTransactionDate}
            </li>
            <li>
               {`Lowest transaction amount: `}${lowest}
               {` for the ${firstTransaction.symbol} company`}
            </li>
            <li>
               {`Highest transaction amount: `}${highest}
               {` for the ${lastTransaction.symbol} company`}
            </li>
         </ul>
      </article>
   );
};
export default PieDataReportTop;
