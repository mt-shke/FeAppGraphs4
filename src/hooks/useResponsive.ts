// import { useEffect, useState } from "react";

// export const useResponsive = () => {
//    const [mediaType, setMediaType] = useState<string | null>(null);

//    const handleMedia = (expWidth:number) => {
//       setMediaType(
//          (expWidth === 0) | null
//             ? null
//             : expWidth >= 1 && expWidth < 640
//             ? "mobile"
//             : expWidth >= 640 && expWidth < 1024
//             ? "tablet"
//             : "desktop"
//       );
//    };

//    useEffect(() => {
//       handleMedia();
//    }, []);

//    return mediaType;
// };
