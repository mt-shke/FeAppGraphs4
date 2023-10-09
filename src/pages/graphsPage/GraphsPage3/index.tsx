import GraphsPage3Header from "./GraphsPage3Header";
import GraphsPage3Section from "./GraphsPage3Section";
import { ICustomerState } from "../../../state/CustomerContext";
import { useOutletContext } from "react-router-dom";

const GraphsPage3 = () => {
   const context = useOutletContext();

   return (
      <section className="flex flex-1 flex-col py-1 md:grid md:grid-rows-3">
         <GraphsPage3Header ctx={context as ICustomerState} />
         <GraphsPage3Section ctx={context as ICustomerState} />
      </section>
   );
};

export default GraphsPage3;
