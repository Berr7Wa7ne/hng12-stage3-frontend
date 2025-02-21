import React from "react";
import { Send } from "lucide-react";

interface TextAreaInputProps {
  input: string;
  setInput: (value: string) => void;
  onSendMessage: () => void;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ input, setInput, onSendMessage }) => {
  return (
    <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg">
      <textarea
        className="w-full p-2 border rounded-lg resize-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
        onClick={onSendMessage}
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TextAreaInput;

  