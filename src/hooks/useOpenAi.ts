import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { ICustomerState } from "../state/CustomerContext";

const API_KEY = "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";

const configuration = new Configuration({
   apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

const useOpenAi = (ctxData: ICustomerState) => {
   const [data, setData] = useState<any>(null);

   useEffect(() => {
      if (!ctxData) {
         return;
      }
      generatePrompt(ctxData);
   }, [ctxData]);

   const generatePrompt = async (ctxData: any) => {
      const dummyData = {
         2014: [
            { name: "amazon", value: 12345 },
            { name: "google", value: 67890 },
            { name: "netflix", value: 54321 },
            { name: "microsoft", value: 98765 },
            { name: "facebook", value: 24680 },
         ],
         2015: [
            { name: "amazon", value: 54321 },
            { name: "google", value: 13579 },
            { name: "netflix", value: 98765 },
            { name: "microsoft", value: 35791 },
            { name: "facebook", value: 11111 },
         ],
         2016: [
            { name: "amazon", value: 77777 },
            { name: "google", value: 88888 },
            { name: "netflix", value: 99999 },
            { name: "microsoft", value: 12345 },
            { name: "facebook", value: 54321 },
         ],
         2017: [
            { name: "amazon", value: 22222 },
            { name: "google", value: 33333 },
            { name: "netflix", value: 44444 },
            { name: "microsoft", value: 55555 },
            { name: "facebook", value: 66666 },
         ],
         2018: [
            { name: "amazon", value: 77777 },
            { name: "google", value: 88888 },
            { name: "netflix", value: 99999 },
            { name: "microsoft", value: 12345 },
            { name: "facebook", value: 54321 },
         ],
         2019: [
            { name: "amazon", value: 22222 },
            { name: "google", value: 33333 },
            { name: "netflix", value: 44444 },
            { name: "microsoft", value: 55555 },
            { name: "facebook", value: 66666 },
         ],
         2020: [
            { name: "amazon", value: 77777 },
            { name: "google", value: 88888 },
            { name: "netflix", value: 99999 },
            { name: "microsoft", value: 12345 },
            { name: "facebook", value: 54321 },
         ],
         2021: [
            { name: "amazon", value: 22222 },
            { name: "google", value: 33333 },
            { name: "netflix", value: 44444 },
            { name: "microsoft", value: 55555 },
            { name: "facebook", value: 66666 },
         ],
         2022: [
            { name: "amazon", value: 77777 },
            { name: "google", value: 88888 },
            { name: "netflix", value: 99999 },
            { name: "microsoft", value: 12345 },
            { name: "facebook", value: 54321 },
         ],
         2023: [
            { name: "amazon", value: 77777 },
            { name: "google", value: 88888 },
            { name: "netflix", value: 99999 },
            { name: "microsoft", value: 12345 },
            { name: "facebook", value: 54321 },
         ],
      };

      const stringified = JSON.stringify(dummyData);

      const modelBar = `You are an expert data analyst with 10 years of experience. Receiving the following object, containing years as key, and data about company name and its value. Return me an ordered list displayig the major key points you can find about their value over time and the biggest changes you can notice: ${stringified}`;
      const modelAsk = `Regarding the following object, return me the sum of each company name with its total value: ${JSON.stringify(
         dummyData
      )}`;

      try {
         if (!configuration.apiKey) {
            throw new Error(
               "OpenAI API key not configured, please follow instructions in README.md"
            );
         }
         const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: modelBar,
            temperature: 0.6,
            max_tokens: 2048,
         });
         const result = completion.data.choices[0].text;
         setData(result);
      } catch (error) {
         // Consider adjusting the error handling logic for your use case
         if (error.response) {
            console.error(error.response.status, error.response.data);
            setData(null);
         } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            setData(null);
         }
      }
   };

   return data;
};

export default useOpenAi;
