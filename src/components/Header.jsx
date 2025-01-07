import { useEffect, useState } from "react";
import { Link } from "react-router"; // import Link from react-router-dom
import useMode from "../hooks/useMode";

const Header = () => {
  const [mode, toggleMode] = useMode();
  const handleMode = () => {
    toggleMode(!mode);
  };

  localStorage.getItem("mode") === "true"
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");

  return (
    <header className="max-w-screen-xl w-full min-h-16 flex items-center justify-center border-b-2 border-[var(--border-color)] mx-auto">
      <div className="max-w-screen-lg flex w-[80%] justify-between items-center">
        <Link to={"/"} className="text-lg font-bold">
          Where in the world?
        </Link>
        <div
          id="mode"
          onClick={handleMode}
          className="max-w-28 w-full flex h-full items-center justify-around cursor-pointer"
        >
          <i
            className={`far fas ${
              mode ? "fa-moon" : "fa-sun"
            } text-xl text-white [text-shadow:0px_0px_3px_rgb(12,_20,_23)]`}
            title="moon"
            aria-hidden="true"
          ></i>
          <h2 id="mode-title">
            <span className="font-bold">
              {mode ? "Dark Mode" : "Light Mode"}
            </span>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
