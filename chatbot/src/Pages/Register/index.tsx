import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { register } from "../../slices/authSlice";

const Register: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [firstname, setFirstname] = React.useState<string>("");
  const [lastname, setLastname] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [phonenumber, setPhonenumber] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const accounttype = "reporter";

  const handleLogin = async () => {
    // This is only a basic validation of inputs. Improve this as needed.
    if (email && password) {
      dispatch(
        register({
          firstname,
          lastname,
          phonenumber,
          email,
          password,
          accounttype,
        })
      );
    }
  };

  return (
    <div className="bg-primary h-screen gap-8 flex justify-start items-center flex-col py-14">
      <img
        className="w-20 h-20 rounded-full"
        src="./lawyer.jpeg"
        alt="lawyer"
      />
      <p className="text-white   font-medium">Register to use Chatbot</p>
      <input
        value={firstname}
        className="custom-input  focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md"
        placeholder="Enter your Firstname"
        type="text"
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <input
        value={lastname}
        className="custom-input  focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md"
        placeholder="Enter your lastname"
        type="text"
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
      <input
        value={phonenumber}
        className="custom-input  focus:border-blue focus:border-2 focus:border-solid   w-[300px] h-[40px] rounded-md"
        placeholder="Enter your phonenumber"
        type="email"
        onChange={(e) => {
          setPhonenumber(e.target.value);
        }}
      />
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
        REGISTER
      </button>

      <div className=" flex max-w-[300px] flex-row  justify-start items-center">
        <p className="text-white">Already have an account?</p>
        <Link to="/" className="text-maroon">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
