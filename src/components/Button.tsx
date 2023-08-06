import { ReactFragment, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({}: ButtonProps) => {
  return (
    <button
      type="button"
      className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
    >
      Warning
    </button>
  );
};
