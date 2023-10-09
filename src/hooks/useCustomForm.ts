// // import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";

// export const useCustomForm = (yupFormSchema: any) => {
//     const {
//         control,
//         handleSubmit,
//         clearErrors,
//         formState: { errors },
//     } = useForm<typeof yupFormSchema>({
//         resolver: yupResolver(yupFormSchema),
//     });

//     return { control, handleSubmit, clearErrors, errors };
// };
