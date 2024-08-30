import { useRecoilValue } from "recoil";
import BlogItem from "./BlogItem";
import { pageNumberState } from "../store/atoms";
import { useEffect, useState } from "react";
import axios from "axios";
import { postType } from "@goelmak/common";
import { Link } from "react-router-dom";
import BlogsSkeletal from "../skeletal/BlogsSkeletal";

type blogType = postType & { author: { name?: string } } & { id: string };

const Page = () => {
  const pageNumber = useRecoilValue(pageNumberState);
  const [blogs, setBlogs] = useState<blogType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url =
          "https://backend.mayank-goel-141.workers.dev/api/v1/blog/bulk".concat(
            `?page=${pageNumber}`
          );
        const res = await axios.get(url, {
          headers: {
            Authorization: localStorage.getItem("token") ?? "",
          },
        });
        const data: blogType[] = res.data.usersPosts;
        setBlogs(data);
      } catch (err) {
        console.error("err", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [pageNumber]);

  return (
    <div>
      {isLoading ? (
        <BlogsSkeletal></BlogsSkeletal>
      ) : (
        <>
          {blogs.map((item: blogType, id) => {
            return (
              <Link to={`/blog/${item.id}`}>
                <BlogItem key={id} blog={item}></BlogItem>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};
export default Page;
