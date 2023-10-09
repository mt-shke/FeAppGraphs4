import { ControllerRenderProps } from "react-hook-form";
import { AnyObjectSchema } from "yup";

interface ICustomInput {
   field: ControllerRenderProps<any, any>;
   id: string;
   placeHolder?: string;
}

const CustomInput: React.FC<ICustomInput> = ({ field, id, placeHolder }) => {
   return (
      <label>
         <input
            {...field}
            id={id}
            placeholder={placeHolder || ""}
            value={field.value || ""}
         ></input>
      </label>
   );
};
export default CustomInput;
