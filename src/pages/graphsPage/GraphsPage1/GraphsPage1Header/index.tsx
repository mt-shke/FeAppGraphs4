import Container from "../../../../components/ui/container/Container";
import useOpenAi from "../../../../hooks/useOpenAi";
import { getTransactions } from "../../../../utils/transaction";
import { ICtxProps } from "./../GraphsPage1Section";
import DataCard from "./DataCard";
import DataReport from "./DataReport";

const GraphsPage1Header: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);

   const aiData = useOpenAi(ctx);

   console.log("aiData :", aiData);

   let dataLeft,
      dataCenter,
      dataReport = <></>;

   if (sortedTransactions) {
      dataLeft = <DataCard ctx={ctx} transactionCode="buy" />;
      dataCenter = <DataCard ctx={ctx} transactionCode="sell" />;
   }

   if (aiData) {
      dataReport = (
         <DataReport sortedTransactions={sortedTransactions} report={aiData} />
      );
   }

   return (
      <div className="min-h-screen w-full py-1 flex flex-1 md:min-h-0 md:row-start-1 md:row-end-2">
         <header className="flex flex-1 flex-col md:flex-row gap-2 p-2 md:grid-cols-3 md:grid-rows-1 bg-main-grey4 overflow-hidden rounded">
            <Container customStyle="flex flex-1 bg-main-grey overflow-y-scroll">
               {dataLeft}
            </Container>
            <Container customStyle="flex flex-1 bg-main-grey2 overflow-y-scroll">
               {dataCenter}
            </Container>
            <Container customStyle="flex flex-1 bg-main-grey3 overflow-y-scroll">
               {dataReport}
            </Container>
         </header>
      </div>
   );
};
export default GraphsPage1Header;
