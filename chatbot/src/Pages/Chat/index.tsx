import { useParams } from "next/navigation";
import React, { useState, ChangeEvent, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiSpinnerGap } from "react-icons/pi";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { getMessages } from "../../slices/messagesSlice";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Messages, User } from "../../myTypes";

const Chat: React.FC = () => {
  const userString = localStorage.getItem("userInfo");
  const user: User | null = userString ? JSON.parse(userString) : null;

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const chatId: string = id[0];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const messagesDb = useAppSelector((state) => state.message.messages);
  const handleSend = () => {
    if (question.trim() !== "") {
      setMessages([
        ...messages,
        { sender: user ? user.email : "anonymous", message: question },
      ]);
      setQuestion(""); // Clear the input field after sending
    }
  };
  useEffect(() => {
    if (id) {
      dispatch(getMessages({ url: chatId }));
    }
    if (messagesDb) {
      setMessages(messagesDb ? messagesDb : []);
    }
  }, []);

  return (
    <div className="  relative">
      <div className="flex-grow overflow-y-hidden mt-4">
        {messages.map((message, index) => (
          <>
            <div key={index} className="flex items-center mb-2 justify-end">
              <div className="bg-lightblue text-white p-2 rounded-md">
                {message.message}
              </div>
              <IoPersonCircleOutline className="w-10 h-10 text-grey mr-2" />
            </div>
          </>
        ))}
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-10 flex flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Ask Question"
          className="custom-input flex-grow border w-full  rounded-lg px-4 py-2  "
          value={question}
          onChange={handleChange}
        />
        <div
          className="bg-maroon inline-flex items-center justify-center w-20  py-2 rounded cursor-pointer"
          onClick={handleSend}
        >
          <IoIosSend className="w-10 h-10 text-grey" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
