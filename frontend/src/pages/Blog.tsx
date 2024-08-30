import { postType } from "@goelmak/common";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogSkeletal from "../skeletal/BlogSkeletal";

type blogType = postType & { author: { name: string; description: string } };

const Blog = () => {
  const [blog, setBlog] = useState<blogType>();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const url = `https://backend.mayank-goel-141.workers.dev/api/v1/blog/${id}`;
      try {
        const res = await axios.get(url, {
          headers: { Authorization: localStorage.getItem("token") || "" },
        });
        const data = await res.data;
        setBlog(data.post);
      } catch (err) {
        console.error("err", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <BlogSkeletal />
      ) : (
        <div className="flex flex-row m-20">
          <div className="flex flex-col w-3/4">
            <div className="text-6xl font-bold text-gray-900 dark:text-gray-100">
              {blog?.title}
            </div>
            <div className="text-2xl font-serif my-5 text-gray-600 dark:text-gray-400">
              {`posted on ${blog?.createdAt?.split("T")[0]}`}
            </div>
            <div className="text-4xl font-medium text-gray-800 dark:text-gray-300">
              {blog?.content}
            </div>
          </div>
          <div className="w-1/4 px-9">
            <div className="text-2xl text-gray-900 dark:text-gray-100">
              Author
            </div>
            <div className="grid grid-cols-4 grid-rows-1 gap-2">
              <div className="grid place-items-center col-span-1">
                <div className="h-16 w-16 border rounded-full text-center bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  {blog?.author.name.charAt(0)}
                </div>
              </div>
              <div className="grid col-span-3 mt-5 gap-4">
                <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {blog?.author.name}
                </div>
                <div className="text-2xl font-serif text-gray-600 dark:text-gray-400">
                  {blog?.author.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
