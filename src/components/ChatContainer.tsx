import { useState, useEffect } from "react";
import { detectLanguage, summarizeText, translateText } from "../api/api";
import TextAreaInput from "./TextAreaInput";
import OutputDisplay from "./OutputDisplay";

interface Message {
  text: string;
  sender: "user" | "ai";
}

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [detectedLanguage, setDetectedLanguage] = useState("en");
  const [summary, setSummary] = useState<string | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState("es");
  const [input, setInput] = useState("");

  // 🔹 Handle Language Detection
  const handleDetectLanguage = async (text: string) => {
    if (!text.trim()) return;
    try {
      const lang = await detectLanguage(text);
      setDetectedLanguage(lang);
    } catch (error) {
        if (error instanceof Error) {
          console.error(error.message); // ✅ Now TypeScript knows error has .message
        } else {
          console.error("An unknown error occurred", error);
        }
      }
  };

  // 🔹 Handle Summarization
  const handleSummarize = async () => {
    if (input.length < 150 || detectedLanguage !== "en") return;
    try {
      const summaryResult = await summarizeText(input);
      setSummary(summaryResult);
    } catch (error) {
        if (error instanceof Error) {
          console.error(error.message); // ✅ Now TypeScript knows error has .message
        } else {
          console.error("An unknown error occurred", error);
        }
      }
  };

  // 🔹 Handle Translation
  const handleTranslate = async (text: string) => {
    console.log("🟢 handleTranslate function triggered!"); // Debugging log
    console.log("📌 Current input value:", input);
    if (!text.trim()) {
      console.log("❌ No input text to translate.");
      return;
    }
    
    console.log("🔹 Translating:", text, "to", selectedLang);
  
    try {
      const translationResult = await translateText(text, selectedLang);
      console.log("✅ Translation successful:", translationResult);
      setTranslation(translationResult);
      console.log("🟢 Updated translation state:", translationResult);
    } catch (error) {
      console.error("❌ Translation failed:", error);
    }
  };
  
    // ✅ NEW: Run translation whenever messages update
    useEffect(() => {
        if (messages.length > 0) {
          const lastMessage = messages[messages.length - 1].text;
          handleTranslate(lastMessage);
        }
      }, [messages]); // 🔹 Triggers on messages update
  
    

  useEffect(() => {
    if (input.trim()) {
      handleDetectLanguage(input);
    }
  }, [input]); // ✅ Detect language on every input change


  // ✅ Handle Sending Message
  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = { text: input, sender: "user" };
    setMessages([...messages, newMessage]); // ✅ Add message
    handleDetectLanguage(input); // ✅ Detect language
    setInput(""); // ✅ Clear input after sending
  };
  

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto p-2">
        <OutputDisplay
          messages={messages}
          detectedLanguage={detectedLanguage}
          summary={summary}
          translation={translation}
          selectedLang={selectedLang} // 🔹 Pass selectedLang
          setSelectedLang={setSelectedLang} 
          onSummarize={handleSummarize}
          onTranslate={handleTranslate}
        />
      </div>
      <TextAreaInput input={input} setInput={setInput} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
