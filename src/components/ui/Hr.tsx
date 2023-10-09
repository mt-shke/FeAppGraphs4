interface props {
   color: string;
   vertical?: boolean;
}

const Hr: React.FC<props> = ({ vertical, color }) => {
   if (!!vertical) {
      return <hr className={`w-[1px] h-full bg-main-${color}`} />;
   }

   return (
      <hr
         className={`h-[1px] w-full border border-b-[0px] border-t-[1px] border-t-main-${color}`}
      />
   );
};
export default Hr;
