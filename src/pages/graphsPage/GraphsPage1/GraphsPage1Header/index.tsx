import Container from "../../../../components/ui/container/Container";
import { getTransactions } from "../../../../utils/transaction";
import { ICtxProps } from "./../GraphsPage1Section";
import DataCard from "./DataCard";

const GraphsPage1Header: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);

   if (!ctx.account || !sortedTransactions) {
      return (
         <div className="min-h-screen w-full py-1 flex flex-1 md:min-h-0 md:row-start-1 md:row-end-2">
            <header className="flex flex-1 flex-col md:flex-row gap-2 p-2 md:grid-cols-3 md:grid-rows-1 bg-main-grey4 overflow-hidden rounded">
               <Container customStyle="flex flex-1 bg-main-grey">
                  Data
               </Container>
               <Container customStyle="flex flex-1 bg-main-grey2">
                  Data
               </Container>
               <Container customStyle="flex flex-1 bg-main-grey3">
                  Report
               </Container>
            </header>
         </div>
      );
   }
   return (
      <div className="min-h-screen w-full py-1 flex flex-1 md:min-h-0 md:row-start-1 md:row-end-2">
         <header className="flex flex-1 flex-col md:flex-row gap-2 p-2 md:grid-cols-3 md:grid-rows-1 bg-main-grey4 overflow-hidden rounded">
            <Container customStyle="flex flex-1 bg-main-grey">
               <DataCard ctx={ctx} transactionCode="buy" />
            </Container>
            <Container customStyle="flex flex-1 bg-main-grey2">
               <DataCard ctx={ctx} transactionCode="sell" />
            </Container>
            <Container customStyle="flex flex-1 bg-main-grey3">
               Report
            </Container>
         </header>
      </div>
   );
};
export default GraphsPage1Header;
