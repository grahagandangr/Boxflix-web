import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  let scrolledClassName =
    "navbar top-0 fixed z-[9999] bg-black bg-opacity-70 shadow-inner backdrop-blur-sm transition-all ease-in duration-500";
  let className =
    "navbar top-0 fixed z-[9999] bg-black bg-opacity-0 shadow-inner backdrop-blur-none transition-all ease-in duration-500";

  return (
    <>
      <div className={scroll ? scrolledClassName : className}>
        <div className="left w-[15%] justify-center m-2 lg:m-0 pr-1">
          <Link
            to={"/"}
            className="btn border-none bg-opacity-0 text-2xl font-bold text-red-700 hover:bg-opacity-0 hover:brightness-150"
          >
            BOXFLIX
          </Link>
        </div>
        <div className="right w-[70%] justify-center">
          <Link
            to={"/browse"}
            className="btn border-none bg-opacity-0 text-lg text-white opacity-80 hover:bg-opacity-0 hover:opacity-100 hover:brightness-200 normal-case"
          >
            Home
          </Link>
        </div>
        <div className="right w-[15%] justify-center m-2 lg:m-0">
          <p className="btn border-none bg-opacity-0 text-2xl font-bold text-white opacity-80 hover:bg-opacity-0 hover:opacity-100 hover:brightness-200">
            <p className="normal-case text-base mr-2">Guest</p>
            <i className="fa-solid fa-user"></i>
          </p>
        </div>
      </div>
    </>
  );
}
