// import { object, string, ref, boolean } from "yup";

// export const credentialsSchema = object().shape({
//     email: string()
//         .required("Email requis")
//         .max(60, "L'email est trop long")
//         .email("Email invalide"),
//     password: string()
//         .required("Password requis")
//         .min(6, "Le mot de passe est trop court")
//         .max(80, "Le mot de passe est trop long"),
// });

// // export const signUpSchema = object().shape({
// //   email: string()
// //     .required('Email is missing')
// //     .min(6, 'Email is Invalid')
// //     .max(40, 'Email is too long')
// //     .email('Email is Invalid'),
// //   password: string()
// //     .required('Password is missing')
// //     .min(6, 'Password is too small')
// //     .max(40, 'Password is too long'),
// //   conditionsCheck: boolean()
// //     .default(false)
// //     .oneOf([true], 'You must accept the terms and conditions'),
// // });

// // export const changePasswordSchema = object().shape({
// //   email: string()
// //     .required('Email is missing')
// //     .max(40, 'Email is too long')
// //     .email('Email is Invalid'),
// //   oldPassword: string()
// //     .min(6, 'Old password is too small')
// //     .max(40, 'Old password is too long'),
// //   newPassword: string()
// //     .min(6, 'New password is too small')
// //     .max(40, 'New password is too long'),
// //   newPasswordConfirmation: string()
// //     .max(40, 'Password is too long')
// //     .oneOf([ref('newPassword')], 'Passwords does not match'),
// //   // check if same
// // });

// // export const updateProfileSchema = object().shape({
// //   firstname: string()
// //     .required('Firstname is missing')
// //     .min(1, 'Firstname is too small')
// //     .max(40, 'Firstname is too long'),
// // });

// // export const userProfileSchema = object().shape({
// //   username: string()
// //     .required('Name is missing')
// //     .min(1, 'Name is too small')
// //     .max(40, 'Name is too long'),
// //   job: string()
// //     .required('Please select your path')
// //     .default(undefined)
// //     .oneOf(jobs, 'Please select your path'),
// // });

// export const emailSchema = object().shape({
//     email: string().required("Email requis").email("Email invalide"),
// });
