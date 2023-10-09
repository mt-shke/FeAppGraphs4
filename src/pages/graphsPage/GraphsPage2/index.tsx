import GraphsPage2Header from "./GraphsPage2Header";
import GraphsPage2Section from "./GraphsPage2Section";
import { ICustomerState } from "../../../state/CustomerContext";
import { useOutletContext } from "react-router-dom";

const GraphsPage2 = () => {
   const context = useOutletContext();
   return (
      <section className="flex flex-1 flex-col py-1 md:grid md:grid-rows-3">
         <GraphsPage2Header ctx={context as ICustomerState} />
         <GraphsPage2Section ctx={context as ICustomerState} />
      </section>
   );
};

export default GraphsPage2;
