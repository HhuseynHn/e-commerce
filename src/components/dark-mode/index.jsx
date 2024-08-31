/** @format */

// /** @format */
// import { IoMoon } from "react-icons/io5";
// import { IoSunny } from "react-icons/io5";

// import { useState } from "react";

// function DarkMode() {

//   const darkModeHundler = () => {

//   };

//   return (
//     <>
//       <div className="bg-white-100 items-center flex items-center justify-center">
//         <button onClick={() => darkModeHundler()}>
//           {
//             dark ? (
//               <IoMoon />
//             ) : (
//               <IoSunny /> // render sunny when dark is true
//             ) // render moon when dark is false
//           }
//         </button>
//       </div>
//     </>
//   );
// }

// export default DarkMode;

import React, { useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./dark-mode";


export default function DarkMode() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={16}
        />
      </div>
    </>
  );
}
