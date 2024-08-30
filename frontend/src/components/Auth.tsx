import Form from "./Form";
import Quote from "./Quote";
import { formType } from "../types";

const Auth = ({ type }: { type: formType }) => {
  return (
    <div className="flex flex-cols justify-stretch h-screen">
      <div className="flex justify-center items-center w-full">
        <Form type={type}></Form>
      </div>
      <div className="flex flex-col bg-slate-100 w-full justify-center py-8">
        <Quote></Quote>
      </div>
    </div>
  );
};
export default Auth;
