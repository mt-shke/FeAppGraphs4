import React from "react";
import { IUpdatedOptions } from "../GraphsPage3Section";

const PieDataHeader: React.FC<IUpdatedOptions> = ({ updatedOptions }) => {
   if (!updatedOptions) {
      return <></>;
   }

   return (
      <article className="flex flex-col gap-2 p-2">
         <h2 className="underline text-xl pb-4">{`Pie Report`}</h2>
         <p>
            {`Rerum magni dolore dignissimos placeat dolorem pariatur perferendis tempore labore veniam? Illum cupiditate blanditiis dolore, repellat ipsam nam sequi est earum, nisi et atque enim error recusandae, at ipsum deserunt?
      Cupiditate temporibus possimus at explicabo exercitationem, saepe maxime, tenetur eius dignissimos praesentium corporis laborum accusamus voluptate, sint sunt ad ipsam in dicta? Maiores laudantium expedita impedit similique libero necessitatibus dicta!`}
         </p>
         <p>
            {` lore  Velit deleniti maiores facere est vel magnam libero maxime iure corporis similique tenetur dolorem ipsa, cupiditate ipsam at ducimus sed a tempora possimus eos explicabo ut. Voluptatibus expedita perspiciatis rerum!`}
         </p>
         <p>
            {` gnam libero maxime iure corporis similique tenetur dolorem ipsa, cupiditate ipsam at ducimus sed a tempora possimus eos explicabo ut. Voluptatibus expedita perspiciatis rerum!`}
         </p>
         <p>
            {`tate ipsam at ducimus sed a tempora possimus eos explicabo ut. Voluptatibus expedita perspiciatis rerum!`}
         </p>
      </article>
   );
};
export default PieDataHeader;
