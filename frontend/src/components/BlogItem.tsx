import { postType } from "@goelmak/common";

const BlogItem = ({
  blog,
}: {
  blog: { author: { name?: string } } & postType;
}) => {
  return (
    <div className="flex flex-col w-3/4 mx-auto">
      <div className="flex flex-row items-center gap-x-4">
        <NameIcon name={blog.author.name ?? "A"} />
        <div className="text-xl text-gray-900 dark:text-gray-100">
          {blog.author.name ?? "anonymous"}
        </div>
        <Dot />
        <div className="text-xl text-gray-500 dark:text-gray-400">
          {blog.createdAt?.split("T")[0] ?? "not provided"}
        </div>
      </div>
      <div className="my-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
        {blog.title}
      </div>
      <div className="text-xl text-gray-800 dark:text-gray-300 text-base text-justify">
        {blog.content.substring(0, 200)}...
      </div>
      <div className="mt-10 flex flex-row">
        <div className="flex flex-row gap-2">
          {blog.tags.map((item, index) => {
            return <Tag tag={item} key={index} />;
          })}
        </div>
        <div className="mx-2 font-thin text-gray-900 dark:text-gray-100">
          {Math.ceil(blog.content.length / 100)} min read
        </div>
      </div>
      <hr className="w-full h-1 mt-9 mb-10 mx-auto bg-gray-200 dark:bg-gray-700 border-0 rounded" />
    </div>
  );
};

const NameIcon = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-full bg-gray-300 dark:bg-gray-600 border h-8 w-8">
      <div className="font-bold text-center text-gray-800 dark:text-gray-100">
        {name.charAt(0)}
      </div>
    </div>
  );
};

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="rounded-full flex flex-cols items-center w-fit px-2 text-base text-center text-gray-900 dark:text-gray-100 border bg-gray-200 dark:bg-gray-800">
      {tag}
    </div>
  );
};

const Dot = () => {
  return (
    <div className="rounded-full bg-gray-400 dark:bg-gray-500 border h-2 w-2"></div>
  );
};

export default BlogItem;
