import React from "react";
import { useTheme } from "../context/ThemeContext.js";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const styles = {
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button
        onClick={toggleTheme}
        style={{ padding: "10px 20px", fontSize: "16px", cursor : "pointer" }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Home;
