import { postType } from "@goelmak/common";
import axios from "axios";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

type actionType = { type: string; value?: string };

const reducer = (state: postType, action: actionType): postType => {
  switch (action.type) {
    case "title": {
      return { ...state, title: action.value ?? "" };
    }
    case "content": {
      return { ...state, content: action.value ?? "" };
    }
    case "reset": {
      return { title: "", content: "", tags: [] };
    }
  }
  return state;
};

const CreateBlog = () => {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    content: "",
    tags: [],
  });

  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (state.title.length === 0 || state.content.length < 200) {
      return;
    } else {
      const postBlog = async () => {
        const url = "https://backend.mayank-goel-141.workers.dev/api/v1/blog";
        try {
          const res = await axios.post(url, state, {
            headers: { Authorization: localStorage.getItem("token") },
          });
          const data = await res.data;
          navigate(`/blog/${data.id}`);
        } catch (err) {
          console.error("err", err);
        }
      };
      postBlog();
      dispatch({ type: "reset" });
    }
  };

  return (
    <div className="grid grid-cols-10 grid-rows-8 w-9/12 mx-auto h-screen my-auto bg-gray-100 dark:bg-gray-900">
      <div className="flex col-span-10 row-span-2 items-center">
        <button
          className="grid items-center col-span-1 text-white bg-black hover:bg-blue-500 text-6xl font-thin border rounded-full dark:bg-gray-800 dark:hover:bg-blue-700"
          onClick={() => handleSubmit()}
        >
          +
        </button>
        <div className="my-auto h-1/2 border-l border-gray-300 mx-4 dark:border-gray-700"></div>
        <textarea
          className="w-full mx-3 pt-12 text-6xl rounded-lg placeholder-gray-400 text-black bg-white focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-600"
          placeholder="Title"
          autoFocus
          value={state.title}
          onChange={(e) => dispatch({ type: "title", value: e.target.value })}
        ></textarea>
      </div>
      <textarea
        className="grid col-span-10 row-span-8 w-full mx-3 text-2xl rounded-lg placeholder-gray-400 text-black bg-white focus:outline-none font-serif dark:bg-gray-800 dark:text-white dark:placeholder-gray-600"
        placeholder="Tell your story in atleast 200 words otherwise we won't be able to post it ..."
        value={state.content}
        onChange={(e) => dispatch({ type: "content", value: e.target.value })}
      ></textarea>
    </div>
  );
};

export default CreateBlog;
