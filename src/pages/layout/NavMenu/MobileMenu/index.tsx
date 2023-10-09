import React, { useState } from "react";
import { ICtxProps } from "../../../graphsPage/GraphsPage1/GraphsPage1Section";
import HamburgerIcon from "../../../../components/ui/navigation/HamburgerIcon";
import MobileNav from "./MobileNav";

const MobileMenu: React.FC<ICtxProps> = ({ ctx }) => {
   const [modal, setModal] = useState(false);

   // TODO
   const setModalHandler = (param: any) => {
      if (param) {
         document.body.style.overflow = "hidden";
         setModal(true);
      } else {
         document.body.style.overflow = "unset";
         setModal(false);
      }
   };

   return (
      <>
         {!modal && <HamburgerIcon onClick={() => setModalHandler(true)} />}
         {modal && <MobileNav onSetModal={() => setModalHandler(false)} />}
      </>
   );
};

export default MobileMenu;
