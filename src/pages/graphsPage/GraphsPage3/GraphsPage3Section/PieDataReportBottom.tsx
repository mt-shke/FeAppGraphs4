import { IUpdatedOptions } from ".";

const PieDataReportBottom: React.FC<IUpdatedOptions> = ({ updatedOptions }) => {
   const updatedData = updatedOptions.series[0].data;

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
export default PieDataReportBottom;
