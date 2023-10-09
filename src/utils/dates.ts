import dayjs from "dayjs";

export const dateToFrFormat = (date: string) => {
   // TODO set to local
   return dayjs(date).format("DD/MM/YY");
   // return dayjs(date).format("DD/MM/YYYY HH:mm:ss");
};

export const dateToEnFormat = (date: string) => {
   return dayjs(date).format("YYYY-MM-DD");
};

export const dateToEnFullFormat = (date: string) => {
   return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

export const getWeekDay = (date: string) => {
   return dayjs(date).day();
};

export const dateToUnix = (date: string) => {
   // TODO set to local
   return dayjs(date).unix();
};

export const sortAndFormatDates = (datesArr: string[]) => {
   return datesArr
      .sort((a, b) => dateToUnix(a) - dateToUnix(b))
      .map((date) => dateToFrFormat(date));
};

// export const sortAndFormatToEchartsData = (data: EchartsDateNumberDataType) => {
//    return data
//       .sort((a, b) => dateToUnix(a[0]) - dateToUnix(b[0]))
//       .map((updated) => [dateToFrFormat(updated[0]), updated[1]]);
// };

// export const sortEchartsData = (data: EchartsDateNumberDataType) => {
//    return data.sort((a, b) => dateToUnix(a[0]) - dateToUnix(b[0]));
// };

export const getVirtualYearDate = (year = 2020) => {
   const random = Math.floor(Math.random() * 1009999999000);
   const formarted = dayjs(random).format("DD/MM/YYYY").slice(0, 6);
   return formarted + year;
};
