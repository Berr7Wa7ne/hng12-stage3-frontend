import MessageBubble from "./MessageBubble";

interface Message {
  text: string;
  sender: "user" | "ai"; // Restricting sender to "user" or "ai"
}

interface OutputDisplayProps {
  messages: Message[];
  detectedLanguage: string;
  onSummarize: () => void;
  onTranslate: (language: string) => void;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ messages, detectedLanguage, onSummarize, onTranslate }) => {
  // Check if we should show the Summarize button
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
  const shouldShowSummarize = lastMessage && lastMessage.text.length > 150 && detectedLanguage === "en";

  return (
    <div className="p-4 bg-white shadow-md rounded-lg space-y-3">
      {/* Display each message */}
      {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} />
      ))}

      {/* Show Summarize button if conditions are met */}
      {shouldShowSummarize && (
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={onSummarize}
        >
          Summarize
        </button>
      )}

      {/* Translate Section */}
      <div className="flex items-center space-x-2">
        <select className="p-2 border rounded-lg" onChange={(e) => onTranslate(e.target.value)}>
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Translate
        </button>
      </div>
    </div>
  );
};

export default OutputDisplay;
