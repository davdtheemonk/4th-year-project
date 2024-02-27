import React, { useState, ChangeEvent } from "react";
import { IoIosSend } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

const Chat: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSend = () => {
    if (question.trim() !== "") {
      setMessages([...messages, question]);
      setQuestion(""); // Clear the input field after sending
    }
  };

  return (
    <div className="mt-[500px]">
      <div className="flex-grow overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className="flex items-center mb-2 justify-end">
            <div className="bg-lightblue text-white p-2 rounded-md">
              {message}
            </div>
            <IoPersonCircleOutline className="w-10 h-10 text-grey mr-2" />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 p-4 bg-primary justify-between">
        <input
          type="text"
          placeholder="Ask Question"
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          value={question}
          onChange={handleChange}
        />
        <div
          className="bg-maroon inline-flex items-center justify-center w-20 h-10 rounded cursor-pointer"
          onClick={handleSend}
        >
          <IoIosSend className="w-10 h-10 text-grey" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
