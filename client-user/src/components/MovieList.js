import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import Swal from "sweetalert2";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../stores/actions/movieAction";
import { useParams } from "react-router-dom";

export default function MovieList() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const [loadingMovies, setLoadingMovies] = useState(true);

  useEffect(() => {
    dispatch(fetchMovies())
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        setLoadingMovies(false);
      });
  }, []);

  return (
    <>
      <div className="wrapper-card py-5 px-10 flex flex-wrap grid-cols-3 gap-5 justify-center">
        {loadingMovies ? (
          <PulseLoader color="#ffffff" size={10} />
        ) : category ? (
          movies
            .filter((movie) => movie?.Genre?.name.toLowerCase() == category)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
}
