// @ts-nocheck

import { useState, useCallback } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";

interface Props {
   data: any[];
   height: number;
   width: number;
   itemSize: number;
   onItemClick: (index: number) => void;
}

const ListContainer = ({
   data,
   height,
   width,
   itemSize,
   onItemClick,
}: Props) => {
   const [selectedItem, setSelectedItem] = useState<number | null>(null);

   const handleItemClick = useCallback(
      (index: number) => {
         setSelectedItem(index);
         onItemClick(index);
      },
      [onItemClick]
   );

   const Row = ({ index, style }: ListChildComponentProps) => {
      const item = data[index];

      return (
         <div
            style={{
               ...style,
               backgroundColor: selectedItem === index ? "lightblue" : "white",
            }}
            onClick={() => handleItemClick(index)}
         >
            {item}
         </div>
      );
   };

   return (
      <FixedSizeList
         height={height}
         width={width}
         itemSize={itemSize}
         itemCount={data.length}
      >
         {Row}
      </FixedSizeList>
   );
};

export default ListContainer;
