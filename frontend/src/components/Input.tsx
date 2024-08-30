import { ChangeEvent } from "react";

const Input = ({
  value,
  className,
  title,
  placeholder,
  onChange,
}: {
  value: string;
  className?: string;
  title: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`${className}`}>
      <div className="font-bold py-2 text-gray-900 dark:text-gray-100">
        {title}
      </div>
      <input
        name={title}
        className="font-mono focus:outline-none border rounded-lg w-full p-1 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={title !== "Password" ? "text" : "password"}
      />
    </div>
  );
};

export default Input;
