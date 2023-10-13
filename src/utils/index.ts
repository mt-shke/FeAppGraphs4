// @ts-nocheck

export const roundNumber = (num: number) => {
   // TODO set to local
   return num.toFixed(2);
};

// export const pathname = location.pathname.replace("/", "");

export const getRandomNum = (hundred = 100) => {
   return Math.floor(Math.random() * hundred + 1);
};

export const searchString = (subject: string, str: string) => {
   const regex = new RegExp(str, "g");
   const result = subject.match(regex);
   return result;
};

export const isMobileDevice = (userAgent: string) => {
   return userAgent.match(new RegExp("mobile", "g"));
};

export const fixStringNumber = (stringNum: any, num = 2) =>
   String(Number(stringNum).toFixed(num));
