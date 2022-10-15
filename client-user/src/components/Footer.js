export default function Footer() {
  return (
    <>
      <div className="wrapper flex flex-row">
        <div className="navbar flex-col lg:flex-row py-4 px-20 bg-black bg-opacity-100 text-neutral-content relative bottom-0 backdrop-blur-sm">
          <div className="lg:flex lg:navbar-start">
            <p>Copyright BOXFLIX © 2022</p>
          </div>
          <div className="lg:flex lg:navbar-center">
            Made with <i className="fa-solid fa-heart text-red-700 mx-2 text-sm"> </i> by Graha Gandang Respati
          </div>
          <div className="lg:flex lg:navbar-end">
            <a href="https://github.com/grahagandangr" target="_blank">
              <i className="fa-brands fa-github px-2 text-lg hover:scale-125"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
