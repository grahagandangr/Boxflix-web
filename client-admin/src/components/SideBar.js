import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUserAction } from "../stores/actions/userAction";

export default function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    dispatch(loginUserAction(false));
    navigate("/login");
    Swal.fire(`Logout success`, "", "success");
  };
  let className =
    "btn btn-sm btn-ghost w-full lg:justify-start mb-3 flex flex-row hover:bg-opacity-0 hover:brightness-200 justify-center";
  let activeClassName = `${className} text-red-500 hover:brightness-100`;

  return (
    <div className="sidebar fixed w-[15%] min-h-screen bg-black bg-opacity-70 shadow-inner backdrop-blur-sm text-start py-3 px-4 lg:px-5">
      <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : className)}>
        <div className="lg:w-[25%] sm:w-full">
          <div className="tooltip tooltip-bottom" data-tip="Movie List">
            <i className="fa-solid fa-clapperboard lg:mr-2"></i>
          </div>
        </div>
        <div className="lg:w-[75%] text-start hidden lg:block">Movie List</div>
      </NavLink>
      <NavLink to="genres" className={({ isActive }) => (isActive ? activeClassName : className)}>
        <div className="lg:w-[25%] sm:w-full">
          <div className="tooltip tooltip-bottom" data-tip="Genre List">
            <i className="fa-solid fa-layer-group lg:mr-2"></i>
          </div>
        </div>
        <div className="lg:w-[75%] text-start hidden lg:block">Genre List</div>
      </NavLink>
      <NavLink to="casts" className={({ isActive }) => (isActive ? activeClassName : className)}>
        <div className="lg:w-[25%] sm:w-full">
          <div className="tooltip tooltip-bottom" data-tip="Cast List">
            <i className="fa-solid fa-people-group lg:mr-2"></i>
          </div>
        </div>
        <div className="lg:w-[75%] text-start hidden lg:block">Cast List</div>
      </NavLink>
      <NavLink to="register-admin" className={({ isActive }) => (isActive ? activeClassName : className)}>
        <div className="lg:w-[25%] sm:w-full">
          <div className="tooltip tooltip-bottom" data-tip="Register">
            <i className="fa-solid fa-user-plus lg:mr-2"></i>
          </div>
        </div>
        <div className="lg:w-[75%] text-start hidden lg:block">Register Admin</div>
      </NavLink>
      <button
        onClick={(e) => {
          e.preventDefault();
          logoutHandler();
        }}
        className="btn btn-sm btn-ghost w-full justify-start mb-3 flex flex-row hover:bg-opacity-0 hover:brightness-200"
      >
        <div className="lg:w-[25%] sm:w-full">
          <div className="tooltip tooltip-bottom" data-tip="Logout">
            <i className="fa-solid fa-arrow-right-from-bracket lg:mr-2"></i>
          </div>
        </div>
        <div className="lg:w-[75%] text-start hidden lg:block">Logout</div>
      </button>
    </div>
  );
}
