import { IUpdatedOptions } from ".";

const PieDataReportTop: React.FC<IUpdatedOptions> = ({ updatedOptions }) => {
   const updatedData = updatedOptions.series[0].data;
   const first = updatedData[0];

   return (
      <article>
         {updatedData.map((item, index) => (
            <li key={item.name + index}>
               {item.name} ${item.value}
            </li>
         ))}
      </article>
   );
};
export default PieDataReportTop;
