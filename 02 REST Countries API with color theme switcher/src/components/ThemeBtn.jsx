import { useTheme } from "../utils/useTheme";
import { FaSun } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";

export default function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="flex items-center gap-2">
      {theme === "dark" ? (
        <>
          <FaSun />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <IoMoonOutline />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
