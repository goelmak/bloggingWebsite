import { Link } from "react-router-dom";
import Page from "./Page";
import Pagination from "./Pagination";

const Layout = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <Link
          className="text-gray-900 dark:text-white text-6xl font-thin"
          to="/createBlog"
        >
          +
        </Link>
        <hr className="w-full h-1 mt-3 mb-10 mx-auto bg-gray-200 dark:bg-gray-700 border-0 rounded"></hr>
      </div>
      <Page />
      <Pagination />
    </div>
  );
};

export default Layout;
