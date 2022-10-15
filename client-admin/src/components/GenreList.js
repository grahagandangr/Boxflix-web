import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Swal from "sweetalert2";
import GenreRow from "./GenreRow";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres, addGenre } from "../stores/actions/genreAction";

export default function GenreList() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genre);
  const [newGenre, setNewGenre] = useState({
    name: "",
  });
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const clearState = () => {
    closeModalHandler();
    setNewGenre({
      name: "",
    });
  };

  const changeNewGenre = (e) => {
    const { name, value } = e.target;
    setNewGenre({ ...newGenre, [name]: value });
  };

  const addGenreHandler = () => {
    closeModalHandler();
    dispatch(addGenre(newGenre))
      .then((data) => {
        Swal.fire(`${data.message}`, "", "success");
      })
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        dispatch(fetchGenres());
        clearState();
      });
  };

  useEffect(() => {
    dispatch(fetchGenres())
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        setLoadingGenres(false);
      });
  }, []);
  return (
    <>
      <div className="w-full flex justify-between px-8 py-5">
        <span className="my-auto px-3">
          <h1 className="text-2xl font-bold uppercase justify-center">Genre List</h1>
        </span>
        <span className="my-auto">
          <button
            onClick={openModalHandler}
            htmlFor="my-modal-add-genre"
            className="btn btn-ghost modal-button text-lg"
          >
            Add Genre
          </button>
        </span>
      </div>
      {loadingGenres ? (
        <PulseLoader color="#ffffff" size={10} />
      ) : (
        <div className="overflow-x-auto py-5 px-10">
          <table className="table table-compact w-full text-center">
            <thead>
              <tr>
                <th className="text-lg">No</th>
                <th className="text-lg">Name</th>
                <th className="text-lg">Created At</th>
                <th className="text-lg">Updated At</th>
                <th className="text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre, idx) => (
                <GenreRow key={genre.id} genre={genre} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* modal add genre */}
      <input type="checkbox" id="my-modal-add-genre" className="modal-toggle" checked={showModal} />
      <div className="modal z-[99999]">
        <div className="modal-box min-w-[50%] relative flex-col text-center p-5">
          <button
            onClick={clearState}
            htmlFor="my-modal-add-genre"
            className="btn btn-sm btn-circle absolute right-2 top-0"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">ADD GENRE</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addGenreHandler();
            }}
          >
            <div className="tooltip w-full" data-tip="Name">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full mb-3 text-lg"
                value={newGenre.name}
                onChange={changeNewGenre}
              />
            </div>
            <label onClick={clearState} className="btn btn-outline btn-error btn-sm w-2/10 mt-4 text-lg mr-2">
              Cancel
            </label>
            <button
              type="submit"
              htmlFor="my-modal-add-genre"
              className="btn btn-outline btn-success btn-sm w-2/10 mt-4 text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
