import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
};

export default ThemeSwitch;