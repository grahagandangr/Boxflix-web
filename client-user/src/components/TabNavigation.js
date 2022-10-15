import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { fetchGenres } from "../stores/actions/genreAction";

export default function TabNavigation() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genre);
  const [loadingGenres, setLoadingGenres] = useState(true);

  useEffect(() => {
    dispatch(fetchGenres())
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        setLoadingGenres(false);
      });
  }, []);

  let className = "tab tab-bordered uppercase";
  let activeClassName = `${className} tab-active brightness-150`;

  return (
    <>
      <div className="tabs justify-center my-5">
        {loadingGenres ? (
          <PulseLoader color="#ffffff" size={10} />
        ) : (
          <>
            <NavLink to={"/browse"} className={({ isActive }) => (isActive ? activeClassName : className)}>
              ALL
            </NavLink>
            {genres.map((genre) => (
              <NavLink
                key={genre.id}
                to={`/movies/${genre.name.toLowerCase()}`}
                className={({ isActive }) => (isActive ? activeClassName : className)}
              >
                {genre.name}
              </NavLink>
            ))}
          </>
        )}
      </div>
    </>
  );
}
