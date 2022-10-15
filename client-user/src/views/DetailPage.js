import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import MoonLoader from "react-spinners/MoonLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesById } from "../stores/actions/movieAction";

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movie } = useSelector((state) => state.movie);
  const [loadingMovies, setLoadingMovies] = useState(true);

  useEffect(() => {
    dispatch(fetchMoviesById(id))
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        setLoadingMovies(false);
      });
  }, []);

  let arrRating = [];
  for (let i = 1; i < 10; i++) {
    if (i == movie.rating) {
      arrRating.push("rating");
    }
    arrRating.push("");
  }

  return (
    <>
      <Navbar />

      <div className="hero min-h-screen mt-20 mb-4">
        {loadingMovies ? (
          <MoonLoader className="mt-20 flex flex-row" color="#ffffff" size={50} />
        ) : (
          <div className="hero-content flex-col gap-10 shadow-2xl shadow-slate-400/20 rounded-xl bg-black bg-opacity-80 backdrop-blur-sm lg:flex-row">
            <img src={movie.posterImgUrl} className="max-w-lg h-full rounded-lg shadow-2xl px-3" />
            <div className="prose px-3 my-3">
              <h1 className="text-center mb-3">{movie.title}</h1>
              <div className="rating justify-center flex mb-3">
                {arrRating.map((rating) => {
                  if (rating == "rating") {
                    return (
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 cursor-default"
                        disabled
                        checked
                      />
                    );
                  } else {
                    return (
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 cursor-default"
                        disabled
                      />
                    );
                  }
                })}
              </div>
              <div className="badge badge-outline mb-4">{movie.Genre.name}</div>
              <iframe src={movie.trailerUrl} frameBorder="0" height="300px" width="100%"></iframe>
              <p className="p-0 text-justify">{movie.synopsis}</p>
              <h3 className="p-0 m-0 text-center">Cast</h3>
              <div className="flex flex-row m-0 p-0 justify-center">
                {movie.Casts.map((cast) => (
                  <div key={cast} className="flex-col mx-4">
                    <img className="w-20 h-20 object-cover rounded-full m-0 p-0 mt-3 mx-auto" src={cast.profilePict} />
                    <p className="p-0 m-0  mt-2 text-center text-sm">{cast.name}</p>
                    <p className="p-0 m-0 text-center text-sm">as {cast.character}</p>
                  </div>
                ))}
              </div>
              <p className="p-0 m-0 mt-3 text-right">Posted by {movie.User.username}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
