import { IUpdatedOptions } from ".";

const PieDataReportBottom: React.FC<IUpdatedOptions> = ({ updatedOptions }) => {
   const updatedData = updatedOptions.series[0].data;

   const totalValue = updatedData.reduce(
      (total, item) => total + item.value,
      0
   );
   const dataWithPercentage = updatedData.map((item) => ({
      ...item,
      percentage: ((item.value / totalValue) * 100).toFixed(1),
   }));
   const finalData = dataWithPercentage
      .sort((a, b) => a.value - b.value)
      .reverse();

   return (
      <article className="flex flex-col gap-2 p-2">
         <h3>Total amount for each company:</h3>
         <ul>
            {finalData.map((item, index) => (
               <li
                  className="grid grid-cols-3 gap-2 items-center just"
                  key={item.name + index}
               >
                  <span className="font-bold text-lg">{item.name}</span>
                  <span className="">${item.value}</span>
                  <span className="font-bold">{item.percentage}%</span>
               </li>
            ))}
         </ul>
      </article>
   );
};
export default PieDataReportBottom;
