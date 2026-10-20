
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div id="container" className={theme}>
      <h1>I am a Home Component</h1>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Home;
