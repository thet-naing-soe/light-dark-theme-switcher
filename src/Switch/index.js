import { useTheme } from "../ThemeContext";
import "./Styles.css"
const Switch = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light"}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default Switch;
