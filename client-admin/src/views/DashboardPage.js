import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function DashboardPage() {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="wrapper-content min-h-screen flex flex-row mt-16">
        <div className="w-[15%]"></div>
        <div className="w-[85%] pr-10">
          <Outlet />
        </div>
      </div>

      <div className="wrapper flex flex-row">
        <div className="w-[15%]"></div>
        <div className="w-[85%]">
          <div className="navbar p-4 bg-black bg-opacity-70 text-neutral-content relative bottom-0 backdrop-blur-sm">
            <div className="navbar-start mx-14">
              <p>Copyright BOXFLIX © 2022</p>
            </div>
            <div className="navbar-center">
              Made with <i className="fa-solid fa-heart text-red-700 mx-2 text-sm"> </i> by Graha Gandang Respati
            </div>
            <div className="navbar-end mx-14">
              <a href="https://github.com/grahagandangr" target="_blank">
                <i className="fa-brands fa-github px-2 text-lg hover:scale-125"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
