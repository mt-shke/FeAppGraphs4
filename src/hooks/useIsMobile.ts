const useIsMobile = (userAgent: string) => {
   return userAgent
      .split(" ")
      .find((item) => item === "Mobile")
      ?.toLocaleLowerCase();
};

export default useIsMobile;
