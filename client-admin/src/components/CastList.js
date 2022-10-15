import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import Swal from "sweetalert2";
import { fetchCasts } from "../stores/actions/castAction";
import CastRow from "./CastRow";

export default function CastList() {
  const dispatch = useDispatch();
  const { casts } = useSelector((state) => state.cast);
  const [loadingCasts, setLoadingCasts] = useState(true);

  useEffect(() => {
    dispatch(fetchCasts())
      .catch((err) => {
        Swal.fire(`${err}`, "", "error");
      })
      .finally(() => {
        setLoadingCasts(false);
      });
  }, []);

  return (
    <>
      <div className="w-full flex justify-between px-8 py-5 pt-7">
        <span className="my-auto px-3">
          <h1 className="text-2xl font-bold uppercase justify-center">Cast List</h1>
        </span>
      </div>
      {loadingCasts ? (
        <PulseLoader color="#ffffff" size={10} />
      ) : (
        <div className="overflow-x-auto py-5 px-10">
          <table className="table table-compact w-full text-center">
            <thead>
              <tr>
                <th className="text-lg">No</th>
                <th className="text-lg">Name</th>
                <th className="text-lg">Profile Picture</th>
                <th className="text-lg">Character</th>
                <th className="text-lg">Movie</th>
              </tr>
            </thead>
            <tbody>
              {casts.map((cast, idx) => (
                <CastRow key={cast.id} cast={cast} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
