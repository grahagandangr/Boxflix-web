import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../stores/actions/userAction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const changeUserLogin = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(userLogin))
      .then(() => {
        console.log(localStorage.getItem("username"));
        navigate("/");
        Swal.fire(`Welcome back ${localStorage.getItem("username")}!`, "", "success");
      })
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      });
  };

  return (
    <>
      <NavBar />
      <div
        className="content min-h-screen"
        style={{
          backgroundImage:
            "url(https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/896b6ae7-1835-4a81-8433-40e1ed006c6e/ID-en-20220815-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        }}
      >
        <div className="hero min-h-screen">
          <div className="hero-content max-w-md flex-col shadow-2xl shadow-slate-400/20 rounded-md bg-black bg-opacity-80 backdrop-blur-sm pb-14 mb-4">
            <div className="text-center prose">
              <h2 className="py-5 px-2">BOXFLIX CMS</h2>
              <form onSubmit={loginHandler} action="">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="justify-center input input-bordered w-3/4 mb-3 text-lg"
                  onChange={changeUserLogin}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Pasword"
                  className="input input-bordered w-3/4 mb-3 text-lg"
                  onChange={changeUserLogin}
                />
                <br />
                <button className="btn btn-error w-3/4 mt-4 text-lg" onClick={loginHandler}>
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
