const Button = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick: React.ComponentProps<"button">["onClick"];
  children: string;
}) => {
  return (
    <button
      className={`w-full border rounded-lg p-3 bg-black text-white hover:bg-blue-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
