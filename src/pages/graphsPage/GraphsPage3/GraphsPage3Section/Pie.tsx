import React from "react";
import ChartModel from "../../../../components/echarts/ChartModel";
import { IUpdatedOptions } from ".";

const Pie: React.FC<IUpdatedOptions> = ({ updatedOptions }) => {
   if (!updatedOptions) {
      return <></>;
   }

   return <ChartModel customOption={updatedOptions} />;
};

export default Pie;
