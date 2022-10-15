import { useState, useEffect } from "react";
import MovieRow from "./MovieRow";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, addMovies } from "../stores/actions/movieAction";
import { fetchGenres } from "../stores/actions/genreAction";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state.movie);
  const { genres } = useSelector((state) => state.genre);
  const [search, setSearch] = useState("");
  const [newMovie, setNewMovie] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    posterImgUrl: "",
    backdropImgUrl: "",
    rating: "",
    genreId: "",
    cast1Name: "",
    cast1Character: "",
    cast1ProfilePict: "",
    cast2Name: "",
    cast2Character: "",
    cast2ProfilePict: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [loadingMovies, setLoadingMovies] = useState(true);

  const changeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const changeNewMovie = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  let bodyToAdd = JSON.stringify({ ...newMovie, rating: +newMovie.rating, genreId: +newMovie.genreId });

  const addMovieHandler = () => {
    closeModalHandler();
    dispatch(addMovies(bodyToAdd))
      .then((data) => {
        Swal.fire(`${data.message}`, "", "success");
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        clearState();
        dispatch(fetchMovies());
      });
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const clearState = () => {
    closeModalHandler();
    setNewMovie({
      title: "",
      synopsis: "",
      trailerUrl: "",
      posterImgUrl: "",
      backdropImgUrl: "",
      rating: "",
      genreId: "clear",
      cast1Name: "",
      cast1Character: "",
      cast1ProfilePict: "",
      cast2Name: "",
      cast2Character: "",
      cast2ProfilePict: "",
    });
    navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres())
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        setLoadingMovies(false);
      });
  }, [newMovie]);

  return (
    <>
      <div className="w-full flex justify-between px-8 py-5">
        <span className="my-auto px-3">
          <h1 className="text-2xl font-bold uppercase justify-center">Movie List</h1>
        </span>
        <span className="my-auto">
          <button
            onClick={openModalHandler}
            htmlFor="my-modal-add-movie"
            className="btn btn-ghost modal-button text-lg"
          >
            Add Movie
          </button>
        </span>
      </div>

      <div className="w-full flex justify-start px-8">
        <span className="my-auto px-3">
          <input
            type="text"
            name="title"
            placeholder="Search by title"
            className="input input-bordered w-full text-lg"
            onChange={changeSearch}
          />
        </span>
      </div>

      {loadingMovies ? (
        <PulseLoader color="#ffffff" size={10} />
      ) : (
        <>
          <div className="overflow-x-auto py-5 px-10">
            <table className="table table-compact w-full text-center">
              <thead>
                <tr>
                  <th className="text-lg">No</th>
                  <th className="text-lg">Title</th>
                  <th className="text-lg">Genre</th>
                  <th className="text-lg">Synopsis</th>
                  <th className="text-lg">Trailer</th>
                  <th className="text-lg">Poster</th>
                  <th className="text-lg">Backdrop</th>
                  <th className="text-lg">Rating</th>
                  <th className="text-lg">Cast</th>
                  <th className="text-lg">Created By</th>
                  <th className="text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {movies
                  .filter((movie) => {
                    if (search == "") {
                      return movie;
                    } else if (movie.title.toLowerCase().includes(search.toLowerCase())) {
                      return movie;
                    }
                  })
                  .map((movie, idx) => (
                    <MovieRow key={movie.id} movie={movie} idx={idx} movieId={movie.id} />
                  ))}
              </tbody>
            </table>
          </div>
          {movies.map((movie, idx) => (
            <div key={movie.id}>
              {/* modal show cast */}
              <input type="checkbox" id={`my-modal-show-cast-${movie.id}`} className="modal-toggle" />
              <div className="modal z-[99999]">
                <div className="modal-box min-w-[50%] relative flex-col text-center p-5">
                  <label
                    htmlFor={`my-modal-show-cast-${movie.id}`}
                    className="btn btn-sm btn-circle absolute right-2 top-0"
                  >
                    ✕
                  </label>
                  <h3 className="p-0 m-0 text-center mb-5 uppercase">Cast</h3>
                  <div className="flex flex-row m-0 p-0 justify-center">
                    {movie?.Casts?.map((cast) => (
                      <div key={cast.id} className="flex-col mx-4">
                        <img
                          className="w-20 h-20 object-cover rounded-full m-0 p-0 mt-3 mx-auto"
                          src={cast.profilePict}
                        />
                        <p className="p-0 m-0 text-center">{cast.name}</p>
                        <p className="p-0 m-0 text-center">as {cast.character}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* modal show backdrop*/}
              <input type="checkbox" id={`my-modal-show-backdrop-${movie.id}`} className="modal-toggle" />
              <div className="modal z-[99999]">
                <div className="modal-box min-w-[50%] relative flex-col text-center p-5">
                  <label
                    htmlFor={`my-modal-show-backdrop-${movie.id}`}
                    className="btn btn-sm btn-circle absolute right-2 top-0"
                  >
                    ✕
                  </label>
                  <h3 className="p-0 m-0 text-center mb-5 uppercase">Backdrop</h3>
                  <div className="flex flex-row m-0 p-0 justify-center">
                    <img className="object-cover m-0 p-0 my-3 mx-auto" src={movie.backdropImgUrl} />
                  </div>
                </div>
              </div>

              {/* modal read synopsis */}
              <input type="checkbox" id={`my-modal-read-synopsis-${movie.id}`} className="modal-toggle" />
              <div className="modal z-[99999]">
                <div className="modal-box min-w-[50%] relative flex-col text-center p-5">
                  <label
                    htmlFor={`my-modal-read-synopsis-${movie.id}`}
                    className="btn btn-sm btn-circle absolute right-2 top-0"
                  >
                    ✕
                  </label>
                  <h3 className="p-0 m-0 text-center mb-5 uppercase">Synopsis</h3>
                  <p className="p-0 m-0 text-justify">{movie.synopsis}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <input type="checkbox" id="my-modal-add-movie" className="modal-toggle" checked={showModal} />
      <div className="modal z-[99999]">
        <div className="modal-box min-w-[50%] relative flex-col text-center p-5">
          <button
            onClick={clearState}
            htmlFor="my-modal-add-movie"
            className="btn btn-sm btn-circle absolute right-2 top-0"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">ADD MOVIE</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addMovieHandler();
            }}
          >
            <div className="tooltip w-full" data-tip="Title">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.title}
                onChange={changeNewMovie}
              />
            </div>
            <div className="tooltip w-full" data-tip="Synopsis">
              <textarea
                name="synopsis"
                className="textarea textarea-bordered w-full h-full text-lg"
                placeholder="Synopsis"
                value={newMovie.synopsis}
                onChange={changeNewMovie}
              ></textarea>
            </div>
            <div className="tooltip w-full" data-tip="Trailer URL">
              <input
                name="trailerUrl"
                type="text"
                placeholder="Trailer URL"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.trailerUrl}
                onChange={changeNewMovie}
              />
            </div>
            <div className="tooltip w-full" data-tip="Backdrop Image URL">
              <input
                name="backdropImgUrl"
                type="text"
                placeholder="Backdrop Image URL"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.backdropImgUrl}
                onChange={changeNewMovie}
              />
            </div>
            <div className="tooltip w-full" data-tip="Poster Image URL">
              <input
                name="posterImgUrl"
                type="text"
                placeholder="Poster Image URL"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.posterImgUrl}
                onChange={changeNewMovie}
              />
            </div>
            <div className="tooltip w-full" data-tip="Rating">
              <input
                name="rating"
                type="number"
                placeholder="Rating"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.rating}
                onChange={changeNewMovie}
              />
            </div>
            <div className="tooltip w-full" data-tip="Genre">
              <select
                onChange={changeNewMovie}
                name="genreId"
                className="select select-bordered w-full text-lg text-[#9CA3AF] mb-4"
              >
                <option value="" disabled selected>
                  Genre
                </option>
                {genres.map((genre) =>
                  genre.id === newMovie.genreId ? (
                    <option selected key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ) : (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="tooltip w-full" data-tip="Cast 1">
              <input
                type="text"
                name="cast1Name"
                placeholder="Cast1 Name"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.cast1Name}
                onChange={changeNewMovie}
              />
              <input
                type="text"
                name="cast1Character"
                placeholder="Cast1 Character"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.cast1Character}
                onChange={changeNewMovie}
              />
              <input
                type="text"
                name="cast1ProfilePict"
                placeholder="Cast1 Profile Picture URL"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.cast1ProfilePict}
                onChange={changeNewMovie}
              />
            </div>
            <div className="tooltip w-full" data-tip="Cast 2">
              <input
                type="text"
                name="cast2Name"
                placeholder="Cast 2 Name"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.cast2Name}
                onChange={changeNewMovie}
              />
              <input
                type="text"
                name="cast2Character"
                placeholder="Cast 2 Character"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.cast2Character}
                onChange={changeNewMovie}
              />
              <input
                type="text"
                name="cast2ProfilePict"
                placeholder="Cast 2 Profile Picture URL"
                className="input input-bordered w-full mb-3 text-lg"
                value={newMovie.cast2ProfilePict}
                onChange={changeNewMovie}
              />
            </div>

            <label onClick={clearState} className="btn btn-outline btn-error btn-sm w-2/10 mt-4 text-lg mr-2">
              Cancel
            </label>
            <button
              htmlFor="my-modal-add-movie"
              className="btn btn-outline btn-success btn-sm w-2/10 mt-4 text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
