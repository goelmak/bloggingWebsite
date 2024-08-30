import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { pageNumberState } from "../store/atoms";

type buttonType = React.ComponentProps<"button">["onClick"];

const Pagination = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  const handleClick: buttonType = (e) => {
    const target = e.target as HTMLButtonElement;
    const newPage =
      target.value === "prev"
        ? pageNumber - 1
        : target.value === "next"
        ? pageNumber + 1
        : Number(target.value);

    setPageNumber(newPage);
  };

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const url =
          "https://backend.mayank-goel-141.workers.dev/api/v1/blog/totalPages";
        const res = await axios.get(url, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error("err", err);
      }
    };
    fetchTotalPages();
  }, []);

  const st = pageNumber > 3 ? pageNumber - 3 + 1 : 1;
  const en = Math.min(st + 2, totalPages);
  const pages = [];
  for (let i = st; i <= en; i++) {
    pages.push(
      <Box
        key={i}
        value={i}
        handleClick={handleClick}
        isActive={i === pageNumber}
      />
    );
  }

  return (
    <div className="flex flex-row justify-center gap-2 mb-5">
      {pageNumber !== 1 && <Box value={"prev"} handleClick={handleClick} />}
      {pages}
      {pageNumber !== totalPages && (
        <Box value={"next"} handleClick={handleClick} />
      )}
    </div>
  );
};

const Box = ({
  value,
  handleClick,
  isActive = false,
}: {
  value: number | string;
  handleClick: buttonType;
  isActive?: boolean;
}) => {
  return (
    <button
      className={`border-4 p-2 text-center ${
        isActive
          ? "bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100"
          : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Pagination;
