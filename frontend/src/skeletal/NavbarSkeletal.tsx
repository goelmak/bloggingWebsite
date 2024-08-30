const NameIcon = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-full bg-gray-300 h-16 w-16"></div>
  );
};

const NavbarSkeletal = () => {
  return (
    <div className="flex justify-between p-12">
      <div className="h-12 w-44 rounded-md bg-gray-300"></div>
      <div className="flex flex-row justify-between gap-4">
        <NameIcon></NameIcon>
      </div>
    </div>
  );
};

export default NavbarSkeletal;
