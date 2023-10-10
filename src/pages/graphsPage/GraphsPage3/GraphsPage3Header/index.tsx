import React from "react";
import Container from "../../../../components/ui/container/Container";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";
import PieDataCard from "./PieDataCard";

const GraphsPage3Header: React.FC<ICtxProps> = ({ ctx }) => {
   if (!ctx.account || !ctx.customer) {
      return <></>;
   }

   return (
      <div className="min-h-[50vh] w-full py-1 flex flex-1 md:min-h-0 md:row-start-1 md:row-end-2">
         <header className="flex flex-1 p-2 md:grid-cols-3 md:grid-rows-1 bg-main-grey4 overflow-hidden rounded">
            <Container customStyle="flex flex-1 bg-main-grey">
               <PieDataCard ctx={ctx} transactionCode="buy" />
            </Container>
         </header>
      </div>
   );
};
export default GraphsPage3Header;
