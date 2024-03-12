import { useParams } from "react-router-dom";
import React, { useState, ChangeEvent, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiSpinnerGap } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getMessages, sendMessage } from "../../slices/messagesSlice";
import { Messages, User, Message } from "../../myTypes";
import toast from "react-hot-toast";

const Chat: React.FC = () => {
  const userString = localStorage.getItem("userInfo");
  const user: User | null = userString ? JSON.parse(userString) : null;

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const messagesDb = useAppSelector((state) => state.message.messages);
  const message = useAppSelector((state) => state.message.message);
  const sendIsLoading = useAppSelector((state) => state.message.status);

  const handleSend = () => {
    if (question.trim() !== "") {
      setMessages([
        ...messages,
        { sender: user ? user.email : "anonymous", message: question },
      ]);

      setQuestion(""); // Clear the input field after sending
      if (id) {
        dispatch(
          sendMessage({
            sender: user ? user.email : "anonymous",
            message: question,
            chatId: id,
          })
        );
      }
    }
  };
  async function fetchData() {
    try {
      // Dispatch the asynchronous action
      const action = await dispatch(getMessages({ url: id ? id : "" }));

      // Check if the action was fulfilled successfully
      if (getMessages.fulfilled.match(action)) {
        // Access the payload (result of the asynchronous operation)
        const messagesDb = action.payload;

        // Proceed with setting messages
        if (Array.isArray(messagesDb)) {
          setMessages(messagesDb);
        }
      }
    } catch (error) {
      // Handle errors if needed

      toast.error("An error occurre whie getting conversation");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="  relative">
      <div className="flex-grow overflow-y-hidden mt-4">
        {messages.map((message, index) => (
          <>
            {message.sender === "anonymous" ||
              (message.sender !== "AI" && (
                <div key={index} className="flex items-center mb-2 justify-end">
                  <div className="bg-lightblue text-white p-2 rounded-md">
                    {message.message}
                  </div>
                  <IoPersonCircleOutline className="w-10 h-10 text-grey mr-2" />
                </div>
              ))}
            {message.sender === "AI" && (
              <div key={index} className="flex-grow overflow-auto">
                <div className="flex items-center mb-2 justify-start">
                  <img
                    src="/lawyer.jpeg"
                    alt="lawyer icon"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div className="bg-white w-full md:max-w-[50%] p-2 h-auto rounded-md flex justify-center align-center">
                    {message.message}
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
        {sendIsLoading === "loading" && (
          <div className="flex-grow overflow-auto">
            <div className="flex items-center mb-2 justify-start">
              <img
                src="/lawyer.jpeg"
                alt="lawyer icon"
                className="w-10 h-10 rounded-full m-2"
              />
              <div className="bg-white p-2 h-[40px] w-[100px] rounded-md flex justify-center align-center">
                <PiSpinnerGap className="w-5 h-5 text-grey" />
              </div>
            </div>
          </div>
        )}
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
