import React from "react";
import { IUpdatedOptions } from "../GraphsPage3Section";

const PieDataHeader: React.FC<IUpdatedOptions> = ({ updatedOptions }) => {
   if (!updatedOptions) {
      return <></>;
   }

   return <article className="p-2">{"Pie Data"}</article>;
};
export default PieDataHeader;
