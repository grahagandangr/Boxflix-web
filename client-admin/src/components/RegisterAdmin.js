import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addUser } from "../stores/actions/userAction";

export default function RegisterAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const clearState = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    });
  };

  const registerHandler = () => {
    dispatch(addUser(user))
      .then(() => {
        clearState();
        navigate("/");
        Swal.fire("Success register admin", "", "success");
      })
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      });
  };
  return (
    <>
      <div className="w-full flex justify-between px-8 py-5 pt-7">
        <span className="my-auto px-3">
          <h1 className="text-2xl font-bold uppercase justify-center">REGISTER ADMIN</h1>
        </span>
      </div>
      <div className="hero-content w-[65%] relative flex-col text-center mx-auto p-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerHandler();
          }}
          action=""
        >
          <div className="tooltip w-full" data-tip="Username">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="input input-bordered w-full mb-3 text-lg"
              onChange={changeUser}
            />
          </div>
          <div className="tooltip w-full" data-tip="Password">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-3 text-lg"
              onChange={changeUser}
            />
          </div>

          <div className="tooltip w-full" data-tip="Email">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-3 text-lg"
              onChange={changeUser}
            />
          </div>
          <div className="tooltip w-full" data-tip="Phone Number">
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-3 text-lg"
              onChange={changeUser}
            />
          </div>
          <div className="tooltip w-full" data-tip="Address">
            <input
              name="address"
              type="text"
              placeholder="Address"
              className="input input-bordered w-full mb-3 text-lg"
              onChange={changeUser}
            />
          </div>

          <button className="btn btn-outline btn-success btn-sm w-2/10 mt-4 text-lg" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
