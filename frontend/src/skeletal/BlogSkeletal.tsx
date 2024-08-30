const BlogSkeletal = () => {
  return (
    <div className="flex flex-row m-20 space-x-8">
      <div className="flex flex-col w-3/4 space-y-5">
        <div className="h-6 bg-gray-300  rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded-full  animate-pulse"></div>
        <div className="h-8 bg-gray-300 rounded-full  animate-pulse"></div>
      </div>
      <div className="w-1/4 px-9  rounded-full space-y-4">
        <div className=" h-6 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="grid grid-cols-4 grid-rows-1 gap-2 space-x-4">
          <div className="grid col-span-1">
            <div className="h-16 w-16  rounded-full animate-pulse bg-gray-300 flex items-center justify-center"></div>
          </div>
          <div className="grid col-span-3 mt-5 gap-4">
            <div className="h-6 bg-gray-300 animate-pulse  rounded-full"></div>
            <div className="h-6 bg-gray-300 animate-pulse  rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSkeletal;
