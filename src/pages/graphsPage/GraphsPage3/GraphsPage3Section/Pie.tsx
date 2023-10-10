import React from "react";
import ChartModel from "../../../../components/echarts/ChartModel";
import { usePieOption } from "../../../../hooks/usePieOption";
import { IDataCardProps } from "../../GraphsPage1/GraphsPage1Header/DataCard";

const Pie: React.FC<IDataCardProps> = ({ ctx, transactionCode }) => {
   const updatedOptions = usePieOption(ctx, transactionCode);
   return <ChartModel customOption={updatedOptions} />;
};

export default Pie;
