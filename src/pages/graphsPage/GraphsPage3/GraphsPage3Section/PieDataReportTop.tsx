import { IUpdatedOptions } from ".";
import { TransactionType } from "../../../../models/ts/types";
import { dateToEnFormat } from "../../../../utils/dates";

export interface ITransactionsProps {
   transactions: TransactionType[];
}

const PieDataReportTop: React.FC<IUpdatedOptions> = ({ transactions }) => {
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
         <ul>
            <li>
               <h2 className="font-bold">
                  {totalTransactions} {`transactions`}
               </h2>
            </li>
            <li>
               {`Total amount: `}${totalAmount}
            </li>
            <li>
               {`First transaction: `}
               {firstTransactionDate}
            </li>
            <li>
               {`Last transaction: `}
               {lastTransactionDate}
            </li>
            <li>
               {`Lowest transaction: `}
               {lowest}
            </li>
            <li>
               {`Highest transaction: `}
               {highest}
            </li>
         </ul>
      </article>
   );
};
export default PieDataReportTop;
