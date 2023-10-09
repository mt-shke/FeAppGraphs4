import Container from "../../../components/ui/container/Container";
import { ICtxProps } from "../GraphsPage1/GraphsPage1Section";

const GraphsPage2Header: React.FC<ICtxProps> = ({ ctx }) => {
   return (
      <div className="min-h-screen w-full py-1 flex flex-1 md:min-h-0 md:row-start-1 md:row-end-2">
         <header className="flex flex-1 flex-col md:flex-row gap-2 p-2 md:grid-cols-3 md:grid-rows-1 bg-main-grey4 overflow-hidden rounded">
            <Container customStyle="flex flex-1 bg-main-grey">
               Work in progress...
            </Container>
            <Container customStyle="flex flex-1 bg-main-grey2">Data</Container>
         </header>
      </div>
   );
};

export default GraphsPage2Header;
