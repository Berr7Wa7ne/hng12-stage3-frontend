import { useState } from "react";
import TextAreaInput from "./TextAreaInput";
import OutputDisplay from "./OutputDisplay";

interface Message {
  text: string;
  sender: "user" | "ai";
}

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [detectedLanguage, setDetectedLanguage] = useState("en");
  const [input, setInput] = useState(""); // ✅ Added input state

  const handleSummarize = () => {
    console.log("Summarizing...");
  };

  const handleTranslate = (language: string) => {
    console.log(`Translating to ${language}...`);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return; // ✅ Use input state

    const newMessage: Message = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput(""); // ✅ Clear input after sending
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto p-2">
        <OutputDisplay
          messages={messages}
          detectedLanguage={detectedLanguage}
          onSummarize={handleSummarize}
          onTranslate={handleTranslate}
        />
      </div>
      {/* ✅ Pass input and setInput to TextAreaInput */}
      <TextAreaInput input={input} setInput={setInput} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
