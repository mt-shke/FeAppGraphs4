// @ts-nocheck
import Container from "../../../../components/ui/container/Container";
import { usePieOption } from "../../../../hooks/usePieOption";
import { pieOptionType } from "../../../../utils/echartsOption/pie/pieOption";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";
import Pie from "./Pie";
import PieDataReportTop from "./PieDataReportTop";
import PieDataReportBottom from "./PieDataReportBottom";

export interface IUpdatedOptions {
   updatedOptions: pieOptionType;
}

const GraphsPage3Section: React.FC<ICtxProps> = ({ ctx }) => {
   const updatedOptions = usePieOption(ctx, "buy");

   if (!updatedOptions) {
      return (
         <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
            <section className="flex flex-1 flex-col md:flex-row md:py-0 md:py-2 md:bg-main-grey4 rounded">
               <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 bg-main-grey"></Container>
                     <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
                     <Container customStyle="flex flex-1 bg-main-grey2"></Container>
                  </div>
               </div>
               <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
               <div className="min-h-[70vh] flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
                  <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full md:flex-row bg-main-grey4 rounded">
                     <Container customStyle="flex flex-1 bg-main-grey2"></Container>
                  </div>
               </div>
            </section>
         </div>
      );
   }

   return (
      <div className="flex flex-1 md:row-start-2 md:row-end-4 md:py-1">
         <section className="flex flex-1 flex-col md:flex-row md:py-0 md:py-2 md:bg-main-grey4 rounded">
            <div className="min-h-screen flex py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey">
                     <PieDataReportTop updatedOptions={updatedOptions} />
                  </Container>
                  <hr className="hidden md:block h-[1px] w-full border border-b-[1px] border-b-main-grey" />
                  <Container customStyle="flex flex-1 bg-main-grey2">
                     <PieDataReportBottom updatedOptions={updatedOptions} />
                  </Container>
               </div>
            </div>
            <hr className="hidden md:block w-[1px] h-full bg-main-grey" />
            <div className="min-h-[70vh] flex flex-1 py-1 md:min-h-0 md:flex-1 md:p-0 rounded">
               <div className="flex flex-1 flex-col gap-2 p-2 md:p-0 md:px-2 md:min-h-0 md:h-full md:flex-row bg-main-grey4 rounded">
                  <Container customStyle="flex flex-1 bg-main-grey2">
                     <Pie updatedOptions={updatedOptions} />
                  </Container>
               </div>
            </div>
         </section>
      </div>
   );
};
export default GraphsPage3Section;
