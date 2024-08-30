const BlogsSkeletal = () => {
  return (
    <div className="flex flex-col space-y-2">
      <SingleBlogSkeletal></SingleBlogSkeletal>
      <SingleBlogSkeletal></SingleBlogSkeletal>
      <SingleBlogSkeletal></SingleBlogSkeletal>
      <SingleBlogSkeletal></SingleBlogSkeletal>
    </div>
  );
};

const SingleBlogSkeletal = () => {
  return (
    <div className="flex flex-col w-3/4 mx-auto space-y-4">
      <div className="flex flex-row items-center space-x-4">
        <NameIcon></NameIcon>
        <div className="h-4 rounded-full bg-gray-300"></div>
        <Dot></Dot>
        <div className="h-6 rounded-md bg-gray-300"></div>
      </div>
      <div className="my-4 h-4 bg-gray-300"></div>
      <div className="h-6 rounded-full bg-gray-300"></div>
      <div className="h-6 rounded-full bg-gray-300"></div>
      <div className="h-6 rounded-full bg-gray-300"></div>
      <div className="mt-10 flex flex-row space-x-4">
        <div className="flex flex-row space-x-2">
          <Tag></Tag>;<Tag></Tag>;<Tag></Tag>;
        </div>
        <div className="mx-2 bg-gray-300 rounded-full h-4"></div>
      </div>
      <hr className="w-full h-1 mt-9 mb-10 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
    </div>
  );
};

const NameIcon = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-full bg-gray-300 animate-pulse h-8 w-8"></div>
  );
};

const Tag = () => {
  return (
    <div className="h-3 rounded-full flex flex-cols items-center w-fit px-2 bg-gray-100"></div>
  );
};
const Dot = () => {
  return <div className="rounded-full bg-gray-300 h-2 w-2"></div>;
};
export default BlogsSkeletal;
