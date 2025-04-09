import Groq from "groq-sdk";
import Constants from "expo-constants"; // Import expo-constants
import { FallbackData } from "./demoData";

let cardData = [
  {
    id: 1,
    front: "Hello",
    back: "Hola",
    explanation: "A common greeting in Spanish.",
    spanishExplanation: "Un saludo común en español.",
    hint: "Interjection",
    example: "Hola, ¿cómo estás?",
    exampleTranslation: "Hello, how are you?",
  }
];

const prompts = `
  Generate 50 Spanish learning flashcards in JSON format. Each flashcard should have:
  - English word on the front
  - Spanish translation on the back
  - A brief explanation in English
  - A brief explanation in Spanish
  - Part of speech as hint
  - A Spanish example sentence
  - English translation of the example
  Format each card like this example:
  [
    {
      "id": 1,
      "front": "English word",
      "back": "Spanish translation",
      "explanation": "Brief explanation",
      "spanishExplanation": "Explicación breve en español",
      "hint": "Part of speech",
      "example": "Spanish example sentence",
      "exampleTranslation": "English translation of the example"  
    }
  ]
`;

// Retrieve the API key from Constants.expoConfig.extra or Constants.manifest.extra
const apiKey =
  Constants.expoConfig?.extra?.expoPublicGroqApiKey ||
  Constants.manifest?.extra?.expoPublicGroqApiKey;

if (!apiKey) {
  throw new Error(
    "The GROQ_API_KEY environment variable is missing or empty; either provide it, or instantiate the Groq client with an apiKey option."
  );
}

const groq = new Groq({ 
  apiKey, // Use the API key dynamically
  dangerouslyAllowBrowser: true
});

async function getGroqChatCompletion() {
  return await groq.chat.completions.create({
    messages: [
      { role: "system", content: "Provide flashcard data in JSON format." },
      { role: "user", content: prompts }
    ],
    model: "llama-3.3-70b-versatile",
  });
}

export async function main() {
  try {
    const chatCompletion = await getGroqChatCompletion();
    let result = chatCompletion.choices[0]?.message?.content || "";

    // Log the raw response for debugging
    console.log("Raw API Response:", result);

    // Remove Markdown formatting or any extra characters
    result = result.replace(/```json|```/g, "").trim();

    if (result === "") {
      console.warn("Received empty response from API, using fallback data.");
      // Use fallback data by mutating the existing array
      cardData.splice(0, cardData.length, ...FallbackData);
      return;
    }

    // Parse and update `cardData` (mutate instead of reassigning)
    const parsedData = JSON.parse(result); // Ensure this is valid JSON
    cardData.splice(0, cardData.length, ...parsedData);

  } catch (error) {
    console.error("Failed to fetch or parse card data:", error);
    // Use fallback data in case of an error
    cardData.splice(0, cardData.length, ...FallbackData);
  }
}

// Export a Promise that resolves when `main` completes
export const cardDataReady = main();

export { cardData };