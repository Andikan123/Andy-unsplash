import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = ()=>{
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches
  const storedDarkMode = localStorage.getItem("darkTheme") === "true"
  return storedDarkMode || prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("cat");
  const [isDarkTheme, setIsdarkTheme] = useState(getInitialDarkMode());
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsdarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
    console.log(body);
    localStorage.setItem("darkTheme")
  };

  useEffect(()=>{
    document. body.classList.toggle("dark-theme", isDarkTheme);
  },[])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};
