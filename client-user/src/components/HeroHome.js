import { Link } from "react-router-dom";

export default function HeroHome() {
  return (
    <>
      {/* <!-- hero home--> */}
      <div
        className="wrapper-hero min-h-fit"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(https://www.themoviedb.org/t/p/original/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg)",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero min-h-fit justify-center lg:justify-start ">
          <div className="hero-content max-w-md lg:max-w-lg pb-5 mb-4 mt-16">
            <div className="py-[5rem] lg:ml-16">
              <div className="text-center prose rounded-full brightness-150">
                <h1 className="m-0 p-0 drop-shadow-lg shadow-black">Doctor Strange in the Multiverse of Madness</h1>
                <p className="py-2 px-2 text-justify drop-shadow-lg shadow-black">
                  Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and
                  dangerous alternate realities of the Multiverse to confront a mysterious new adversary.
                </p>
                <Link
                  to={"/movies/detail/8/doctor-strange-in-the-multiverse-of-madness"}
                  className="btn mx-2 px-7 normal-case rounded-md border-none bg-white text-xl font-bold text-black hover:bg-[#DFDFDF] hover:bg-opacity-80"
                >
                  <i class="fa-solid fa-play mr-2"></i> Play
                </Link>
                <Link
                  to={"/movies/detail/8/doctor-strange-in-the-multiverse-of-madness"}
                  className="btn mx-2 px-7 normal-case rounded-md border-none bg-[#212121] text-xl font-normal text-white hover:bg-opacity-80"
                >
                  <i class="fa-solid fa-circle-info mr-2"></i>
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-4 w-full bg-gradient-to-b from-transparent to-[#212121]"></div>
      </div>
    </>
  );
}
