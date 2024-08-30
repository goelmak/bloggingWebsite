import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import { RecoilRoot } from "recoil";
import CreateBlog from "./pages/CreateBlog";
import Home from "./components/Home";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/blog/:id" element={<Blog></Blog>}></Route>
            <Route
              path="/createBlog"
              element={<CreateBlog></CreateBlog>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default App;
