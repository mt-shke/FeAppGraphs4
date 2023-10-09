import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import NegativeBarChart from "./NegativeBarChart";
import BarChart from "./BarChart";
import { TransactionsBucketType } from "../../../models/ts/types";

interface IChartsContainer {
   data: TransactionsBucketType | null;
}

const ChartsContainer: React.FC<IChartsContainer> = ({ data }) => {
   const [selectedTab, setSelectedTab] = useState("Bar");
   const tabMenu = ["Bar", "Graph", "Negative Bar", "Pie"];

   useEffect(() => {}, [data]);

   let graphContent = <></>;
   if (selectedTab === tabMenu[0]) {
      graphContent = <BarChart data={data} />;
   }
   if (selectedTab === tabMenu[1]) {
      graphContent = <RadarChart data={data} />;
   }
   if (selectedTab === tabMenu[2]) {
      graphContent = <NegativeBarChart data={data} />;
   }
   if (selectedTab === tabMenu[3]) {
      graphContent = <PieChart data={data} />;
   }

   if (!data) {
      return (
         <section className="bg-gray-200 h-screen">
            <h2 className="p-4 text-xl">No available data</h2>
         </section>
      );
   }

   return (
      <>
         <nav>
            <ul className="flex gap-1">
               {tabMenu.map((tab, index) => (
                  <li
                     key={tab + index}
                     className={`${
                        selectedTab === tabMenu[index]
                           ? "bg-gray-200"
                           : "bg-gray-400"
                     } px-4 w-fit rounded-sm hover:cursor-pointer`}
                     onClick={() => {
                        setSelectedTab((p) => tabMenu[index]);
                     }}
                  >
                     {tabMenu[index]}
                  </li>
               ))}
            </ul>
         </nav>
         <section className="bg-gray-200 h-screen">{graphContent}</section>
      </>
   );
};
export default ChartsContainer;
