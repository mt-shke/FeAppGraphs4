// @ts-nocheck

import ChartModel from "../../../../components/echarts/ChartModel";
import {
   basicRadarOption,
   getUpdatedRadarOption,
} from "../../../../utils/echartsOption/radar/basicRadarOption";
import { getTransactions } from "../../../../utils/transaction";
import { ICtxProps } from "../../GraphsPage1/GraphsPage1Section";

const GraphsPage2BasicRadar: React.FC<ICtxProps> = ({ ctx }) => {
   const sortedTransactions = getTransactions(ctx);
   if (!ctx.account || !sortedTransactions) {
      return <></>;
   }

   const { buy, sell } = sortedTransactions;
   const updatedOption = basicRadarOption;
   const { indicatorData, seriesData } = getUpdatedRadarOption(buy, sell);
   const reupdated = {
      ...updatedOption,
      series: [{ ...updatedOption.series[0], data: seriesData }],
      radar: { indicator: indicatorData },
   };

   return <ChartModel customOption={reupdated} />;
};

export default GraphsPage2BasicRadar;
