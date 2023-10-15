// @ts-nocheck
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getAiContent = async (prompt: string) => {
   if (!configuration.apiKey) {
      console.log("Error : Invalid API KEY");
      return;
   }

   const question = prompt || "";
   if (question.trim().length === 0) {
      console.log("Please enter a valid question");
      throw new Error("Invalid question");
      return;
   }

   try {
      const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: generatePrompt(question),
         temperature: 0.6,
      });
      if (!response.data) {
         throw new Error("No response data");
         console.log("Error : no response");
         return;
      }

      console.log("Response ok :", response.data);

      return response.data;
   } catch (error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
         console.error(error.response.status, error.response.data);
         res.status(error.response.status).json(error.response.data);
      } else {
         console.error(`Error with OpenAI API request: ${error.message}`);
         res.status(500).json({
            error: {
               message: "An error occurred during your request.",
            },
         });
      }
   }
};

function generatePrompt(question) {
   const capitalizedAnimal =
      question[0].toUpperCase() + question.slice(1).toLowerCase();
   return `Suggest three names for an question that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}

// function generatePrompt(animal) {
//    const capitalizedAnimal =
//       animal[0].toUpperCase() + animal.slice(1).toLowerCase();
//    return `Suggest three names for an animal that is a superhero.

// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: ${capitalizedAnimal}
// Names:`;
// }
