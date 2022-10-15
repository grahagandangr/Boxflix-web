import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="content min-h-screen">
        <div className="hero min-h-screen brightness-110">
          <div className="hero-content flex-col bg-opacity-0 pb-14 mb-4">
            <div className="text-center prose">
              <h1 className="px-2 text-5xl font-black drop-shadow-lg shadow-black">Page Not Found</h1>
              <Link to={"/browse"} className="btn btn-ghost rounded-md">
                Back to Home Here
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
