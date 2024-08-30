import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms";

const Home = () => {
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    setUserState((prevUserState) => ({
      ...prevUserState,
      isLoading: true,
    }));
    const fetchData = async () => {
      try {
        const url = "https://backend.mayank-goel-141.workers.dev/api/v1/user";
        const authentication = await axios.get(url, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        const data = await authentication.data;
        setUserState((prevUserState) => ({
          ...prevUserState,
          user: data.user,
        }));

        navigate(`/blogs`);
      } catch (err) {
        navigate("/login");
        console.error("err", err);
      } finally {
        setUserState((prevUserState) => ({
          ...prevUserState,
          isLoading: false,
        }));
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};
export default Home;
