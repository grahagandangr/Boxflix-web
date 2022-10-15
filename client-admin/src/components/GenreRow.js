import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteGenre, editGenre, fetchGenres } from "../stores/actions/genreAction";
import { useSelector, useDispatch } from "react-redux";

export default function GenreRow({ genre, idx }) {
  const [newGenre, setNewGenre] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewGenre(genre);
  }, []);

  const dateFormatter = (date) => {
    return date.toLocaleDateString("en-CA");
  };

  const clearState = () => {
    closeModalHandler();
    setNewGenre(genre);
  };

  const changeNewGenre = (e) => {
    const { name, value } = e.target;
    setNewGenre({ ...newGenre, [name]: value });
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const deleteGenreHandler = (id) => {
    dispatch(deleteGenre(id))
      .then((data) => {
        Swal.fire(`${data.message}`, "", "success");
      })
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        dispatch(fetchGenres());
      });
  };

  const editGenreHandler = (id) => {
    closeModalHandler();
    dispatch(editGenre(newGenre, id))
      .then((data) => {
        Swal.fire(`${data.message}`, "", "success");
      })
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        dispatch(fetchGenres());
      });
  };

  return (
    <>
      <tr className="hover">
        <td>{idx + 1}</td>
        <td>
          <div className="badge badge-outline">{genre.name}</div>
        </td>
        <td>{genre.createdAt}</td>
        <td>{genre.updatedAt}</td>
        <td>
          <button
            htmlFor={`my-modal-update-genre-${genre.id}`}
            onClick={openModalHandler}
            className="btn btn-success btn-sm mx-1"
          >
            Update
          </button>
          <button
            className="btn btn-error btn-sm mx-1"
            onClick={(e) => {
              e.preventDefault();
              deleteGenreHandler(genre.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>

      {/* modal edit genre */}
      <input type="checkbox" id={`my-modal-update-genre-${genre.id}`} className="modal-toggle" checked={showModal} />
      <div className="modal z-[99999]">
        <div className="modal-box min-w-[50%] relative flex-col text-center p-5">
          <button
            onClick={clearState}
            htmlFor={`my-modal-update-genre-${genre.id}`}
            className="btn btn-sm btn-circle absolute right-2 top-0"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">UPDATE GENRE</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editGenreHandler(genre.id);
            }}
          >
            <div className="tooltip tooltip-bottom w-full" data-tip="Name">
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
              htmlFor={`my-modal-update-genre-${genre.id}`}
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
