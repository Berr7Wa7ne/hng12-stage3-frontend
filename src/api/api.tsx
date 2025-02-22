import axios from "axios";

const LANGUAGE_DETECTION_BASE_URL = "https://translation.googleapis.com/language/translate/v2/detect";
const LANGUAGE_API_KEY = import.meta.env.VITE_LANGUAGE_DETECTOR_API_KEY;
const SUMMARIZATION_BASE_URL = "https://generativelanguage.googleapis.com/v1/models";
const SUMMARIZER_API_KEY = import.meta.env.VITE_SUMMARIZER_API_KEY;

// 🌟 1. Language Detection API
export const detectLanguage = async (text: string): Promise<string> => {
  try {
    console.log("Language Detector API Key:", import.meta.env.VITE_LANGUAGE_DETECTOR_API_KEY);
    const response = await axios.post(
      `${LANGUAGE_DETECTION_BASE_URL}?key=${LANGUAGE_API_KEY}`,
      { q: text }
    );
    return response.data.data.detections[0][0].language;
  } catch (error) {
    console.error("Language detection failed:", error);
    throw new Error("Failed to detect language");
  }
};

// 🌟 2. Summarization API
export const summarizeText = async (text: string) => {
  try {
    console.log("Summarizer API Key:", import.meta.env.VITE_SUMMARIZER_API_KEY);
    const response = await axios.post(
      `${SUMMARIZATION_BASE_URL}/YOUR_SUMMARIZATION_MODEL:generateText?key=${SUMMARIZER_API_KEY}`,
      { text }
    );
    return response.data.summary; // Returns summarized text
  } catch (error) {
    console.error("Summarization failed:", error);
    throw new Error("Failed to summarize text");
  }
};

// 🌟 3. Translation API
export const translateText = async (text: string, targetLang: string) => {
  console.log("🟢 translateText function triggered with:", text, "to", targetLang);
  
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    console.log("🔹 Fetching from URL:", url);
    
    const response = await axios.get(url);

    console.log("✅ API Response:", response.data);

    return response.data[0][0][0]; // Extract translated text
  } catch (error) {
    console.error("❌ Translation API failed:", error);
    throw new Error("Failed to translate text");
  }
};

