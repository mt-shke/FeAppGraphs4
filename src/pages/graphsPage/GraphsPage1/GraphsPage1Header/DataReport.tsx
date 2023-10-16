import { AllTransactionsType } from "../../../../models/ts/types";

interface IGraphsData {
   sortedTransactions: AllTransactionsType;
   report: string;
}

const DataReport: React.FC<IGraphsData> = ({ sortedTransactions, report }) => {
   if (report) {
      console.log(report);

      return (
         <article className="flex flex-col gap-2 p-2">
            <ul></ul>
         </article>
      );
   }

   return (
      <article className="flex flex-col gap-2 p-2">
         <p>
            {`Rerum magni dolore dilanditiis dolore, repellat ipsam nam sequi est earum, nisi et atque enim error recusandae, at ipsum deserunt?
ate, sint sunt ad ipsam in dicta? Maiores laudantium expedita impedit similique libero necessitatibus dicta!`}
         </p>
         <p>
            {`iditate blanditiis dolore, repellat ipsam nam sequi est earum, nisi et atque enim error recusandae, at ipsum deserunt?
      Cupiditaum corporis laborum accusamus voluptate, sint sunt ad ipsam in dicta? Maiores laudantium expedita impedit similique libero necessitatibus dicta!`}
         </p>
      </article>
   );
};
export default DataReport;
