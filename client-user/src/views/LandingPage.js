import Footer from "../components/Footer";
import HeroLanding from "../components/HeroLanding";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroLanding />
      <div className="lg:h-[500px] h-full bg-black">
        <div className="flex flex-row h-full">
          <div className="hero w-[50%] h-full">
            <div className="hero-content flex-col bg-opacity-0 backdrop-blur-sm">
              <div className="text-justify prose">
                <h2 className="text-4xl font-black">Enjoy on your TV.</h2>
                <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
              </div>
            </div>
          </div>
          <div className="hero w-[50%] h-full">
            <div className="hero-content flex-col bg-opacity-0 backdrop-blur-sm p-2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-[#212121]"></div>
      <div className="lg:h-[500px] h-full bg-black">
        <div className="flex flex-row h-full">
          <div className="hero w-[50%] h-full">
            <div className="hero-content flex-col bg-opacity-0 backdrop-blur-sm p-2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="hero w-[50%] h-full">
            <div className="hero-content flex-col bg-opacity-0 backdrop-blur-sm">
              <div className="text-justify prose">
                <h2 className="text-4xl font-black">Download your shows to watch offline.</h2>
                <h3>Save your favorites easily and always have something to watch.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-[#212121]"></div>
      <div className="lg:h-[500px] h-full bg-black">
        <div className="flex flex-row h-full">
          <div className="hero w-[50%] h-full">
            <div className="hero-content flex-col bg-opacity-0 backdrop-blur-sm">
              <div className="text-justify prose">
                <h2 className="text-4xl font-black">Watch everywhere.</h2>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
              </div>
            </div>
          </div>
          <div className="hero w-[50%] h-full">
            <div className="hero-content flex-col bg-opacity-0 backdrop-blur-sm p-2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="z-[999] h-2 w-full bg-[#212121]"></div>
      <Footer />
    </>
  );
}
