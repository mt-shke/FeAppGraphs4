interface ICloseIcon {
   onClick: () => void;
}

const CloseIcon: React.FC<ICloseIcon> = ({ onClick }) => {
   return (
      <div
         onClick={onClick}
         className="relative rotate-45 h-10 flex flex-col place-content-center gap-[3px] animate-fade
 "
      >
         <div className="w-6 h-[4px] bg-main-black"></div>
         <div className="absolute rotate-90 w-6 h-[4px] bg-main-black"></div>
      </div>
   );
};
export default CloseIcon;
