import { useRecoilState } from "recoil";
import { userState } from "../store/atoms";
import { Link, useNavigate } from "react-router-dom";
import NavbarSkeletal from "../skeletal/NavbarSkeletal";

const NameIcon = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-full bg-zinc-400 dark:bg-zinc-600 border h-16 w-16">
      <div className="font-bold text-center text-gray-900 dark:text-gray-100">
        {name.charAt(0)}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [state, setState] = useRecoilState(userState);
  const navigate = useNavigate();

  const handleDemoClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.setItem(
      "token",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0MDY2OGZiLWVhMzYtNDJjOC1iNGYyLTM0MDAyN2VjMzg1MCJ9.7kfYwLU9Gu85QKGfOsi28LHabTRp-DwqNDBwDCY6dVo"
    );
    setState({ user: "Demo User", isLoading: false });
    navigate("/blogs");
  };

  return (
    <>
      {state.isLoading ? (
        <NavbarSkeletal />
      ) : (
        <div className="flex justify-between p-12 bg-gray-100 dark:bg-gray-800">
          <div className="text-6xl font-serif text-gray-900 dark:text-gray-100">
            Conduit
          </div>
          {state.user && state.user.length > 0 ? (
            <NameIcon name={state.user} />
          ) : (
            <div className="flex flex-row justify-between gap-4">
              <Link
                to={"/login"}
                className="w-48 text-2xl border text-center rounded-lg p-3 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                LogIn
              </Link>
              <Link
                to={"/signup"}
                className="w-48 text-2xl border text-center rounded-lg p-3 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                SignUp
              </Link>
              <button
                className="w-28 text-2xl border text-center rounded-lg p-3 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 hover:bg-blue-700 dark:hover:bg-blue-600"
                onClick={handleDemoClick}
              >
                Demo
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
