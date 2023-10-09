import { styles } from "../../../styles/styles";

interface Props {
   children?: React.ReactNode;
   customStyle?: string;
}

const Container: React.FC<Props> = ({ children, customStyle }) => {
   return (
      <div className={`${styles.container + " " + customStyle}`}>
         {children}
      </div>
   );
};
export default Container;
