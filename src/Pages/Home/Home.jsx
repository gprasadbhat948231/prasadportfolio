import "./Home.css";
import { Link } from "@chakra-ui/react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Home = () => {
  const el = useRef(null);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    const pdfUrl = process.env.PUBLIC_URL + '/myresume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target="_blank";
    link.download = 'G_Prasad_Bhat_Resume.pdf';
    link.click();
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Enthusiastic dev 😎", "Full Stack Developer 💻"],
      startDelay: 0,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
      cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home" id="homepage">
      <div className="home-container">
        <div className="right-img">
          <img
            className="img-fluid custom-img"
            src="https://github.com/gprasadbhat948231/gshopy/assets/107459781/0ebad7aa-40da-4df1-a2f8-f9549f3fdf96"
            alt="gpImage"
          />
        </div>
        <div className="d-flex flex-column justify-content-center Im-text-section">
          <span className="profile-links">
            <Link href="https://github.com/gprasadbhat948231" isExternal>
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/g-prasad-bhat-1b1345155/"
              isExternal
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </span>
          <span className="Im-text">
            Hello, I am <span className="name-Im-text">G Prasad Bhat</span>
          </span>
          <span
            className="Im-text-enthusiastic py-2"
            style={{ minHeight: "75px" }}
            ref={el}
          ></span>
          <span className="Im-text-subHeading">
            Knack of building applications with front and back end operations
          </span>
          <div className="d-flex flex-row justify-content-center mt-5 btndiv">
            <Link href="#contactme">
              <button className="btn-hire-me">Hire me</button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1T1pDgUeg9556GMpMEVsRAZdZpXYP18na/view?usp=drive_link"
              target={"_blank"}
            >
              <button onClick={onButtonClick} className="btn-resume-me">
                Get Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
