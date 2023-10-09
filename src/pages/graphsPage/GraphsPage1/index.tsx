import React from "react";
import { ICustomerState } from "../../../state/CustomerContext";
import GraphsPage1Header from "./GraphsPage1Header";
import GraphsPage1Section from "./GraphsPage1Section";
import { useOutletContext } from "react-router-dom";

const GraphsPage1 = () => {
   const context = useOutletContext();
   return (
      <section className="flex flex-1 flex-col py-1 md:grid md:grid-rows-3">
         <GraphsPage1Header ctx={context as ICustomerState} />
         <GraphsPage1Section ctx={context as ICustomerState} />
      </section>
   );
};

export default GraphsPage1;
