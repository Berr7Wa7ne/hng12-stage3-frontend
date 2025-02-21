const API_BASE_URL = "https://chrome-ai-api.example.com"; // Replace with actual URL

export const detectLanguage = async (text) => {
  try {
    const response = await fetch(`${API_BASE_URL}/language-detection`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error("Language Detection Error:", error);
    return null;
  }
};

export const summarizeText = async (text) => {
  try {
    const response = await fetch(`${API_BASE_URL}/summarize`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error("Summarization Error:", error);
    return null;
  }
};

export const translateText = async (text, targetLang) => {
  try {
    const response = await fetch(`${API_BASE_URL}/translate`, {
      method: "POST",
      body: JSON.stringify({ text, targetLang }),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error("Translation Error:", error);
    return null;
  }
};
