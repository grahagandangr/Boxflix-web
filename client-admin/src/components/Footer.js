export default function Footer() {
  return (
    <div className="navbar p-4 bg-black bg-opacity-70 text-neutral-content absolute bottom-0 backdrop-blur-sm px-32">
      <div className="navbar-start mx-15">
        <p>Copyright BOXFLIX © 2022</p>
      </div>
      <div className="navbar-center">
        Made with <i className="fa-solid fa-heart text-red-700 mx-2 text-sm"> </i> by Graha Gandang Respati
      </div>
      <div className="navbar-end mx-15">
        <a href="https://github.com/grahagandangr" target="_blank">
          <i className="fa-brands fa-github px-2 text-lg hover:scale-125"></i>
        </a>
      </div>
    </div>
  );
}
