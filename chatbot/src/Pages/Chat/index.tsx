import React, { useState, ChangeEvent } from "react";
import { IoIosSend } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiSpinnerGap } from "react-icons/pi";

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
    <div className="  relative">
      <div className="flex-grow overflow-y-scroll mt-4">
        {messages.map((message, index) => (
          <>
            <div key={index} className="flex items-center mb-2 justify-end">
              <div className="bg-lightblue text-white p-2 rounded-md">
                {message}
              </div>
              <IoPersonCircleOutline className="w-10 h-10 text-grey mr-2" />
            </div>
            {message && (
              <div className="flex-grow overflow-auto">
                <div className="flex items-center mb-2 justify-start">
                  <img
                    src="./lawyer.jpeg"
                    alt="lawyer icon"
                    className="w-10 h-10 rounded-full m-2"
                  />
                  <div className="bg-white p-2 h-[40px] w-[100px] rounded-md flex justify-center align-center">
                    <PiSpinnerGap className="w-5 h-5 text-grey" />
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px",
          flexDirection: "row",
          display: "flex",
          gap: 4,
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Ask Question"
          className="flex-grow border w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
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
