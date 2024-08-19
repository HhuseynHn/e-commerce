/** @format */
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

import { useState } from "react";
import "./dark-mode.css";
function DarkMode() {
  const [dark, setDark] = useState(false);

  const darkModeHundler = () => {
    setDark(!dark);
    console.log(dark);

    if (!dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="bg-white-100 items-center flex items-center justify-center">
        <button onClick={() => darkModeHundler()}>
          {
            dark ? (
              <IoMoon />
            ) : (
              <IoSunny /> // render sunny when dark is true
            ) // render moon when dark is false
          }
        </button>
      </div>
    </>
  );
}

export default DarkMode;
