import { ChangeEvent, useReducer } from "react";
import Button from "./Button";
import Input from "./Input";
import { formType } from "../types";
import Heading from "./Heading";
import axios from "axios";
import { userType } from "@goelmak/common";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms";

const reducer = (
  state: userType,
  action: { type: string; value: string }
): userType => {
  switch (action.type) {
    case "Email":
      return { ...state, email: action.value };
    case "Username":
      return { ...state, name: action.value };
    case "Password":
      return { ...state, password: action.value };
    case "Description":
      return { ...state, description: action.value };
    default:
      return state;
  }
};
const Form = ({ type }: { type: formType }) => {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);

  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });
  const handleOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: name, value });
  };

  const handleOnSubmitHandler = async () => {
    try {
      const url =
        type === formType.SignUp
          ? "https://backend.mayank-goel-141.workers.dev/api/v1/user/signup"
          : "https://backend.mayank-goel-141.workers.dev/api/v1/user/signin";
      const res = await axios.post(url, state);
      const data = res.data;
      localStorage.setItem("token", `Bearer ${data.token}`);
      navigate("/blogs");
      setUserState(data.user);
    } catch (error) {
      console.error("error :", error);
    }
  };

  return (
    <div className="flex flex-col">
      <Heading type={type}></Heading>
      {type === formType.SignUp && (
        <>
          <Input
            className="mt-2 mb-1"
            title="Username"
            placeholder="Enter Your Name"
            value={state?.name || ""}
            onChange={handleOnChangeHandler}
          ></Input>

          <Input
            className="mt-2 mb-1"
            title="Description"
            placeholder="Enter about yourself"
            value={state?.description || ""}
            onChange={handleOnChangeHandler}
          ></Input>
        </>
      )}
      <Input
        className="my-1"
        title="Email"
        placeholder="abc@email.com"
        value={state.email}
        onChange={handleOnChangeHandler}
      ></Input>
      <Input
        className="mb-3"
        title="Password"
        value={state.password}
        onChange={handleOnChangeHandler}
      ></Input>
      <Button className="mt-2" onClick={handleOnSubmitHandler}>
        {type === formType.Login ? "Login" : "Signup"}
      </Button>
    </div>
  );
};
export default Form;
