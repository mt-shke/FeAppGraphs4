import Container from "../../../../components/ui/container/Container";
import { getTransactions } from "../../../../utils/transaction";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";
import Graphs2DataLeft from "./Graphs2DataLeft";
import Graphs2DataRight from "./Graphs2DataRight";

const GraphsPage2Header: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);

   let contentLeft,
      contentRight = <></>;

   if (sortedTransactions) {
      contentLeft = <Graphs2DataLeft sortedTransactions={sortedTransactions} />;
      contentRight = (
         <Graphs2DataRight sortedTransactions={sortedTransactions} />
      );
   }

   return (
      <div className="min-h-screen w-full py-1 flex flex-1 md:min-h-0 md:row-start-1 md:row-end-2">
         <header className="flex flex-1 flex-col md:flex-row gap-2 p-2 md:grid-cols-3 md:grid-rows-1 bg-main-grey4 overflow-hidden rounded">
            <Container customStyle="flex flex-1 bg-main-grey">
               {contentLeft}
            </Container>
            <Container customStyle="flex flex-1 bg-main-grey2">
               {contentRight}
            </Container>
         </header>
      </div>
   );
};

export default GraphsPage2Header;
