interface IHamburgerIcon {
   onClick: () => void;
}

const HamburgerIcon: React.FC<IHamburgerIcon> = ({ onClick }) => {
   return (
      <div
         onClick={onClick}
         className="flex flex-col
      fixed z-20 bottom-6 right-10 h-10 flex flex-col place-content-center gap-[3px] animate-fade
      "
      >
         <div className="w-6 h-[4px] bg-main-black"></div>
         <div className="w-6 h-[4px] bg-main-black"></div>
         <div className="w-6 h-[4px] bg-main-black"></div>
      </div>
   );
};
export default HamburgerIcon;
