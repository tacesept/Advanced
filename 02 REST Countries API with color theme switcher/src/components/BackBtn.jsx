import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackBtn() {
  return (
    <Link
      to="/"
      relative="path"
      className="flex items-center gap-2 px-6 shadow-card 
        bg-white dark:bg-blue-900 w-fit font-light hover:bg-blue-900 hover:text-white dark:hover:bg-white dark:hover:text-blue-900"
    >
      <FaArrowLeft />
      <span className="text-sm leading-[2.25]">Back</span>
    </Link>
  );
}
