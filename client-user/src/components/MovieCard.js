import { useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const [autoplay, setAutoplay] = useState(movie.trailerUrl);

  const autoplayHandler = () => {
    setAutoplay(movie.trailerUrl + "?autoplay=1");
  };

  const stopAutoplayHandler = () => {
    setAutoplay(movie.trailerUrl);
  };
  return (
    <>
      <div
        onMouseEnter={autoplayHandler}
        onMouseLeave={stopAutoplayHandler}
        className="group transition-all duration-500 card rounded-md h-full w-96 bg-base-10 shadow-xl mb-3 hover:scale-[1.5] hover:backdrop-blur-lg hover:shadow-2xl hover:z-[999]"
        key={movie.id}
      >
        <figure className="hidden group-hover:hidden">
          <img src={movie.backdropImgUrl} alt={movie.title} />
        </figure>
        <iframe
          className="hidden group-hover:block"
          src={autoplay}
          frameBorder="0"
          height="225px"
          width="100%"
        ></iframe>

        <div className="card-body bg-[#212121] bg-opacity-50 hidden group-hover:flex p-3">
          <div className="flex flex-row justify-center group-hover:justify-between">
            <h2
              style={{
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "subpixel-antialiased",
              }}
              className="card-title text-2xl mt-0 pt=0 mx-3 text-left"
            >
              {movie.title}
            </h2>
            <div className="tooltip hidden group-hover:flex my-auto" data-tip="More Info">
              <Link to={`/movies/detail/${movie.id}/${movie.slug}`} className="btn btn-sm btn-outline btn-circle mx-3">
                <i className="fa-solid fa-chevron-down"></i>
              </Link>
            </div>
          </div>
          <p
            style={{
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
              WebkitFontSmoothing: "subpixel-antialiased",
            }}
            className="font-bold text-left mx-3"
          >
            <i class="fa-solid fa-star text-orange-400 opacity-75"></i> {movie.rating}/10
          </p>
          <div className="card-actions justify-start mx-3">
            <div className="badge badge-outline">{movie.Genre.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}
