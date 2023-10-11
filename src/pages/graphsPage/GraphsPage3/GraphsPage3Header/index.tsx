import React from "react";
import Container from "../../../../components/ui/container/Container";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";
import PieDataHeader from "./PieDataHeader";
import { usePieOption } from "../../../../hooks/usePieOption";

const GraphsPage3Header: React.FC<ICtxProps> = ({ ctx }) => {
   const updatedOptions = usePieOption(ctx, "buy");
   let content = <></>;
   if (updatedOptions) {
      content = <PieDataHeader updatedOptions={updatedOptions} />;
   }
   return (
      <div className="min-h-[50vh] w-full py-1 flex flex-1 md:min-h-0 md:row-start-1 md:row-end-2">
         <header className="flex flex-1 p-2 md:grid-cols-3 md:grid-rows-1 bg-main-grey4 overflow-hidden rounded">
            <Container customStyle="flex flex-1 px-2 py-4 bg-main-grey overflow-y-scroll">
               {content}
            </Container>
         </header>
      </div>
   );
};
export default GraphsPage3Header;
