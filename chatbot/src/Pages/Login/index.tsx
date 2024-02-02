import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  return (
    <div className="bg-primary h-screen gap-8 flex justify-start items-center flex-col py-14">
      <img
        className="w-20 h-20 rounded-full"
        src="./lawyer.jpeg"
        alt="lawyer"
      />
      <input
        value={email}
        className="bg-white w-[300px] h-[40px] rounded-md"
        placeholder="Email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        value={password}
        className="bg-white w-[300px] h-[40px] rounded-md"
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button className="bg-maroon rounded-md w-[300px] h-[40px] text-white">
        LOGIN
      </button>

      <button className="bg-lightblue w-[300px] h-[40px] text-white">
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
