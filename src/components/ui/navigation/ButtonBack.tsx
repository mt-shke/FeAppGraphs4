import { BsArrowLeftSquareFill } from "react-icons/bs";

interface IButtonBack {
   onclick: () => void;
}

const ButtonBack: React.FC<IButtonBack> = ({ onclick }) => {
   return (
      <BsArrowLeftSquareFill
         onClick={onclick}
         className="w-8 h-8 hover:cursor-pointer"
      />
   );
};
export default ButtonBack;
