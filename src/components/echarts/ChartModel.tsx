import ReactEcharts from "echarts-for-react";
import { ICustomChartData, setOption } from "../../utils/echarts";

interface IChartModelProps {
   chartData?: ICustomChartData | null;
   customOption?: any;
   style?: any;
}

const ChartModel: React.FC<IChartModelProps> = ({
   chartData,
   customOption,
   style,
}) => {
   if (!!customOption) {
      return (
         <ReactEcharts
            option={customOption}
            style={{
               height: "100%",
               width: "100%",
               backgroundColor: "white",
               ...style,
            }}
         />
      );
   }

   if (!chartData) {
      return <></>;
   }

   const updatedOptions = setOption(chartData);

   return (
      <ReactEcharts
         option={updatedOptions}
         style={{
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            ...style,
         }}
      />
   );
};

export default ChartModel;
