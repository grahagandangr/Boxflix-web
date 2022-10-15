import { Link } from "react-router-dom";

export default function NavBar() {
  const access_token = localStorage.getItem("access_token");
  const username = localStorage.getItem("username");

  return (
    <div className="navbar top-0 fixed z-[9999] bg-black bg-opacity-70 shadow-inner backdrop-blur-sm">
      <div className="left w-[15%] justify-center m-2 lg:m-0 pr-1">
        <Link
          to="/"
          className="btn border-none bg-opacity-0 text-2xl font-bold text-red-700 hover:bg-opacity-0 hover:brightness-150"
        >
          BOXFLIX
        </Link>
      </div>
      <div className="right w-[70%]"></div>

      <div
        className={
          access_token ? "right w-[15%] justify-center m-2 lg:m-0" : "right w-[15%] justify-center m-2 lg:m-0 hidden"
        }
      >
        <a className="btn border-none bg-opacity-0 text-2xl font-bold text-white opacity-80 hover:bg-opacity-0 hover:opacity-100 hover:brightness-200">
          <p className="normal-case text-base mr-2">{username}</p>
          <i className="fa-solid fa-user"></i>
        </a>
      </div>
    </div>
  );
}
