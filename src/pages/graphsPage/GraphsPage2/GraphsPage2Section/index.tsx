import React, { useEffect } from "react";
import Container from "../../../../components/ui/container/Container";
import { getTransactions } from "../../../../utils/transaction";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";
import GraphsPage2CalendarTwo from "./GraphsPage2CalendarTwo";
import GraphsPage2StackedArea from "./GraphsPage2StackedArea";
import GraphsPage2BasicRadar from "./GraphsPage2BasicRadar";
import GraphsPage2DatePunch from "./GraphsPage2DatePunch";

const GraphsPage2Section: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);
   useEffect(() => {}, [ctx.account]);

   if (!ctx.account || !sortedTransactions) {
      return (
         <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
            <section className="flex flex-1 flex-col md:py-0 md:px-2 md:bg-main-grey4 rounded">
               <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 bg-main-grey"></Container>
                     <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                     <Container customStyle="flex flex-1 bg-main-grey2"></Container>
                  </div>
               </div>
               <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
               <div className="min-h-screen max-h-screen flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 md:max-h-auto rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 bg-main-grey2"></Container>
                     <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                     <Container customStyle="flex flex-1 bg-main-grey3"></Container>
                  </div>
               </div>
            </section>
         </div>
      );
   }

   return (
      <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
         <section className="flex flex-1 flex-col md:py-0 md:px-2 md:bg-main-grey4 rounded">
            <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey">
                     <GraphsPage2StackedArea ctx={ctx} />
                  </Container>
                  <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                  <Container customStyle="flex flex-1 bg-main-grey2">
                     <GraphsPage2DatePunch ctx={ctx} />
                  </Container>
               </div>
            </div>
            <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
            <div className="min-h-screen max-h-screen flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded md:max-h-auto">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:py-2 md:min-h-max md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey2">
                     <GraphsPage2BasicRadar ctx={ctx} />
                  </Container>
                  <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
                  <Container customStyle="flex flex-1 bg-main-grey3 overflow-y-scroll">
                     <GraphsPage2CalendarTwo ctx={ctx} />
                  </Container>
               </div>
            </div>
         </section>
      </div>
   );
};
export default GraphsPage2Section;
