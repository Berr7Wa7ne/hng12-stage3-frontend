interface MessageBubbleProps {
    text: string;
    sender: "user" | "ai";
  }
  
  const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender }) => {
    return (
      <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
        <div className={`p-3 rounded-lg max-w-[75%] shadow-md ${
          sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
        }`}>
          {text}
        </div>
      </div>
    );
  };
  
  export default MessageBubble;
  