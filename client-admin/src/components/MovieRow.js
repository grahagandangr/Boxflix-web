import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, editMovies, deleteMovies } from "../stores/actions/movieAction";
import { useNavigate } from "react-router-dom";

export default function MovieRow({ movie, idx }) {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genre);

  useEffect(() => {
    setNewMovie(movie);
  }, []);

  const clearState = () => {
    closeModalHandler();
    setNewMovie(movie);
  };

  const changeNewMovie = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const bodyToEdit = JSON.stringify({ ...newMovie, rating: +newMovie.rating, genreId: +newMovie.genreId });
  const editMovieHandler = (id) => {
    closeModalHandler();
    dispatch(editMovies(bodyToEdit, id))
      .then((data) => {
        Swal.fire(`${data.message}`, "", "success");
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        dispatch(fetchMovies());
      });
  };

  const deleteMovieHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          dispatch(deleteMovies(id)).finally(() => {
            dispatch(fetchMovies());
          });
        }
      })
      // .then((data) => {
      //   Swal.fire(`${data.message}`, "", "success");
      // })
      // .catch((err) => {
      //   Swal.fire(`${err}`, "", "error");
      // })
      // .finally(() => {
      //   dispatch(fetchMovies());
      // });
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <tr className="hover">
        <td>{idx + 1}</td>
        <td>{movie.title}</td>
        <td>
          <div className="badge badge-outline">{movie?.Genre?.name}</div>
        </td>
        <td>
          <label htmlFor={`my-modal-read-synopsis-${movie.id}`} className="btn modal-button btn-sm btn-info">
            Read
          </label>
        </td>
        <td>
          <a href={movie.trailerUrl} target="_blank" className="btn btn-error btn-sm">
            Play
          </a>
        </td>
        <td>
          <img
            className="max-w-[100px] h-full object-cover rounded-lg m-0 p-0 mx-auto my-auto"
            src={movie.posterImgUrl}
          />
        </td>
        <td>
          <label htmlFor={`my-modal-show-backdrop-${movie.id}`} className="btn modal-button btn-sm btn-info">
            Show
          </label>
        </td>
        <td>{movie.rating}</td>
        <td>
          <label htmlFor={`my-modal-show-cast-${movie.id}`} className="btn modal-button btn-sm btn-info">
            Show
          </label>
        </td>
        <td>{movie?.User?.username}</td>
        <td>
          <button
            htmlFor={`my-modal-update-movie-${movie.id}`}
            className="btn btn-success btn-sm mx-1"
            onClick={openModalHandler}
          >
            Update
          </button>
          <button
            className="btn btn-error btn-sm mx-1"
            onClick={(e) => {
              e.preventDefault();
              deleteMovieHandler(movie.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>

      {/* modal edit movie */}
      <input type="checkbox" id={`my-modal-update-movie-${movie.id}`} className="modal-toggle" checked={showModal} />
      <div className="modal z-[99999]">
        <div className="modal-box min-w-[50%] relative flex-col text-center p-5">
          <button
            onClick={clearState}
            htmlFor={`my-modal-update-movie-${movie.id}`}
            className="btn btn-sm btn-circle absolute right-2 top-0"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">UPDATE MOVIE</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editMovieHandler(movie.id);
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

            <label onClick={clearState} className="btn btn-outline btn-error btn-sm w-2/10 mt-4 text-lg mr-2">
              Cancel
            </label>
            <button
              htmlFor={`my-modal-update-movie-${movie.id}`}
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
