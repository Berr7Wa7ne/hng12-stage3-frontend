import MessageBubble from "./MessageBubble";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface OutputDisplayProps {
  messages: Message[];
  detectedLanguage: string;
  summary: string | null;
  translation: string | null;
  selectedLang: string;
  setSelectedLang: (language: string) => void; 
  onSummarize: () => void;
  onTranslate: () => void;
}

const OutputDisplay = ({
  messages,
  detectedLanguage,
  summary,
  translation,
  selectedLang,
  setSelectedLang,
  onSummarize,
  onTranslate,
}: OutputDisplayProps) => {
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
  const shouldShowSummarize = lastMessage && lastMessage.text.length > 150 && detectedLanguage === "en";

  console.log("🟡 OutputDisplay received translation:", translation);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg space-y-3">
      {/* Display each message */}
      {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} />
      ))}

      {/* Show Summarize button */}
      {shouldShowSummarize && (
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" onClick={onSummarize}>
          Summarize
        </button>
      )}

      {/* Show Summary if available */}
      {summary && (
        <div className="p-2 bg-gray-100 rounded">
          <strong>Summary:</strong> {summary}
        </div>
      )}

      {/* Show Translation if available */}
      {translation && (
        <div className="p-2 bg-gray-100 rounded">
          <strong>Translation:</strong> {translation}
        </div>
      )}

      {/* Translate Section */}
      <div className="flex items-center space-x-2">
        <select
          className="p-2 border rounded-lg"
          value={selectedLang} // 🔹 Use selectedLang state
          onChange={(e) => setSelectedLang(e.target.value)} // 🔹 Update selectedLang state
        >
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
        <button
  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
  onClick={() => {
    console.log("🔹 Translate button clicked!");
    onTranslate();
  }}
>
  Translate
</button>

      </div>
    </div>
  );
};

export default OutputDisplay;
