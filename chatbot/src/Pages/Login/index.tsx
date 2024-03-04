import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { anonymousLogin, login } from "../../slices/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    // This is only a basic validation of inputs. Improve this as needed.
    if (email && password) {
      dispatch(
        login({
          email,
          password,
        })
      );
    }
  };
  const handleAnonymousLogin = async () => {
    dispatch(anonymousLogin());
  };
  return (
    <div className="bg-primary h-screen gap-8 flex justify-start items-center flex-col py-14">
      <img
        className="w-20 h-20 rounded-full"
        src="./lawyer.jpeg"
        alt="lawyer"
      />
      <p className="text-white   font-medium">Log in to Chatbot</p>
      <input
        value={email}
        className="custom-input  focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md"
        placeholder="Enter your email address"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        value={password}
        className="custom-input  focus:border-blue focus:border-2 focus:border-solid  color-white w-[300px] h-[40px] rounded-md"
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        onClick={() => {
          handleLogin();
        }}
        className="bg-maroon rounded-md w-[300px] h-[40px] text-white"
      >
        LOGIN
      </button>

      <button
        onClick={() => {
          handleAnonymousLogin();
        }}
        className="bg-lightblue w-[300px] h-[40px] text-white"
      >
        ANONYMOUS
      </button>
      <div className=" flex max-w-[300px] flex-row  justify-start items-center">
        <p className="text-white">Don't have an account?</p>
        <Link to="/" className="text-maroon">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
