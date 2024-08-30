import { Link } from "react-router-dom";
import { formType } from "../types";

const Heading = ({ type }: { type: formType }) => {
  const heading =
    type === formType.Login ? "LOGIN TO YOUR ACCOUNT" : "CREATE AN ACCOUNT";

  return (
    <>
      <div className="font-bold text-3xl text-gray-900 dark:text-gray-100">
        {heading}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-center">
        {type !== formType.Login ? (
          <>
            <span> Already have an account? </span>
            <Link
              to="/login"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <span>Don't have an account? </span>
            <Link
              to="/signup"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Heading;
