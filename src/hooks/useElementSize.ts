import { useCallback, useEffect, useState } from "react";
import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

interface Size {
   width: number;
   height: number;
   media: string | undefined;
}

// const useElementSize = <T extends HTMLElement = HTMLDivElement>(): [
//    (node: T | null) => void,
//    Size
// ] => {
//    // Mutable values like 'ref.current' aren't valid dependencies
//    // because mutating them doesn't re-render the component.
//    // Instead, we use a state as a ref to be reactive.
//    const [ref, setRef] = useState<T | null>(null);
//    const [size, setSize] = useState<Size>({
//       width: 0,
//       height: 0,
//    });

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
   (node: T | null) => void,
   Size
] {
   // Mutable values like 'ref.current' aren't valid dependencies
   // because mutating them doesn't re-render the component.
   // Instead, we use a state as a ref to be reactive.
   const [ref, setRef] = useState<T | null>(null);
   const [size, setSize] = useState<Size>({
      width: 0,
      height: 0,
      media: undefined,
   });

   // TailwindCSS Default Media Queries
   // Breakpoint prefix	Minimum width	CSS
   // sm	640px
   // md	768px
   // lg	1024px
   // xl	1280px
   // 2x 1536px

   // Prevent too many rendering using useCallback
   const handleSize = useCallback(() => {
      setSize({
         width: ref?.offsetWidth || 0,
         height: ref?.offsetHeight || 0,
         media:
            size.width === 0
               ? undefined
               : size.width >= 1 && size.width < 640
               ? "mobile"
               : size.width >= 640 && size.width < 1024
               ? "tablet"
               : "desktop",
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ref?.offsetHeight, ref?.offsetWidth]);

   useEventListener("resize", handleSize);

   useIsomorphicLayoutEffect(() => {
      handleSize();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ref?.offsetHeight, ref?.offsetWidth]);

   return [setRef, size];
}

export default useElementSize;
