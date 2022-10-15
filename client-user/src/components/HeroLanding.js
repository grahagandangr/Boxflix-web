import { Link } from "react-router-dom";

export default function HeroLanding() {
  return (
    <>
      {/* <!-- hero landing--> */}
      <div
        className="content min-h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/896b6ae7-1835-4a81-8433-40e1ed006c6e/ID-en-20220815-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero min-h-screen brightness-110">
          <div className="hero-content flex-col bg-opacity-0 pb-14 mb-4">
            <div className="text-center prose">
              <h1 className="px-2 text-5xl font-black drop-shadow-lg shadow-black">
                Unlimited movies, TV shows, and more.
              </h1>
              <h2 className="font-black drop-shadow-lg shadow-black">Watch anywhere. Cancel anytime.</h2>
              <Link to={"/browse"} className="btn btn-error rounded-md">
                Watch Here
              </Link>
            </div>
          </div>
        </div>
        <div className="h-2 w-full bg-[#212121]"></div>
      </div>
    </>
  );
}
