import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";  

export default function Header() { 
  return (
    <header className="px-4 md:px-10 bg-white dark:bg-blue-900 shadow-header">
      <div
        className="flex justify-between items-center max-w-[1280px] mx-auto py-[1.875rem] lg:py-6 
        text-grey-950 dark:text-white font-semibold"
      >
        <Link to="/">Where in the world?</Link>
        <ThemeBtn />
      </div> 
    </header>
  );
}
