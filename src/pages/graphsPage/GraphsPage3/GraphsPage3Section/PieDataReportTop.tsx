import { IUpdatedOptions } from ".";
import { TransactionType } from "../../../../models/ts/types";

export interface ITransactionsProps {
   transactions: TransactionType[];
}

const PieDataReportTop: React.FC<IUpdatedOptions> = ({ transactions }) => {
   console.log(transactions);

   const totalTransactions = transactions.length;
   const amounts = transactions.map((item) => item.amount);
   const totalAmount = amounts.reduce((prev, curr) => prev + curr, 0);

   console.log("amounts :", amounts);

   return (
      <article>
         <ul>
            <li>
               {totalTransactions} {`transactions`}
            </li>
            <li>
               {`Total amount: `}${totalAmount}
            </li>
         </ul>
      </article>
   );
};
export default PieDataReportTop;
