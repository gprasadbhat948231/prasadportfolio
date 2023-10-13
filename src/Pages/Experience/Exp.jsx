import { Link } from "@chakra-ui/react";
import "./Exp.css";

function Exp() {
  return (
    <div id="Projects">
      <div className="d-flex flex-column mt-4">
        <span className="about-me-text">My Projects</span>
        <span className="why-text-sub">Summary of Projects</span>
      </div>
      <div className="web-view ">
        <div className="project-container">
          <div className="proj-cont1">
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "10px",
                color: "#fff000"
              }}
            >
              Sephora.com
            </h1>
            <img
              style={{
                width: "100%",
                height: "250px",
                margin: "auto",
                borderRadius: "10px"
              }}
              src="https://gprasadbhat948231.github.io/static/media/sephora.d7a5b54856230b81a9a9.png"
              alt="proj1"
            />
            <div className="proj-tools">
              <h2 className="tools-specs">React</h2>
              <h2 className="tools-specs">Redux</h2>
              <h2 className="tools-specs">Redux-Thunk</h2>
              <h2 className="tools-specs">Render</h2>
              <h2 className="tools-specs">Chakra UI</h2>
            </div>
            <h4
              style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}
            >
              Summary:
            </h4>
            <h5 style={{ fontSize: "18px", marginTop: "10px" }}>
              An E-commerce website used to buy beauty products where user can
              search,sort and filter the products according to their need.
            </h5>
            <div className="toolbtndiv">
              <Link
                href="https://github.com/gprasadbhat948231/sephora.com"
                isExternal
              >
                <button className="btn-sourcecode">View SourceCode</button>
              </Link>
              <Link href="https://nemow.vercel.app/" isExternal>
                <button className="btn-getdemo">Get Demo</button>
              </Link>
            </div>
          </div>
          <div className="proj-cont1">
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "10px",
                color: "#fff000"
              }}
            >
              Purple.com
            </h1>
            <img
              style={{
                width: "100%",
                height: "250px",
                margin: "auto",
                borderRadius: "10px"
              }}
              src="https://gprasadbhat948231.github.io/static/media/purpple.052229d3bcbdc137b453.png"
              alt="proj2"
            />
            <div className="proj-tools">
              <h2 className="tools-specs">ReactJS</h2>
              <h2 className="tools-specs">Redux</h2>
              <h2 className="tools-specs">NodeJs</h2>
              <h2 className="tools-specs">Express</h2>
              <h2 className="tools-specs">Mongoose</h2>
              <h2 className="tools-specs">MongoDB</h2>
            </div>
            <h4
              style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}
            >
              Summary:
            </h4>
            <h5 style={{ fontSize: "18px", marginTop: "10px" }}>
              This is a fully featured MERN collaborative project where we tried
              to implement the shopping website related to beauty products.
            </h5>
            <div className=" toolbtndiv">
              <Link
                href="https://github.com/abhiamber/resonant-dinosaurs-925"
                isExternal
              >
                <button className="btn-sourcecode">View SourceCode</button>
              </Link>
              <Link
                href="https://frontend-eight-tawny-20.vercel.app/"
                isExternal
              >
                <button className="btn-getdemo">Get Demo</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-container2">
          <div className="proj-cont1">
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "10px",
                color: "#fff000"
              }}
            >
              Yoox.com
            </h1>
            <img
              style={{
                width: "100%",
                height: "250px",
                margin: "auto",
                borderRadius: "10px"
              }}
              src="https://gprasadbhat948231.github.io/static/media/gshopy.14aaa6b030ecf123c93d.png"
              alt="proj3"
            />
            <div className="proj-tools">
              <h2 className="tools-specs">React</h2>
              <h2 className="tools-specs">Chakra-UI</h2>
              <h2 className="tools-specs">Render</h2>
              <h2 className="tools-specs">React-Slicks</h2>
            </div>
            <h4
              style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}
            >
              Summary:
            </h4>
            <h5 style={{ fontSize: "18px", marginTop: "10px" }}>
              This is the E-commerce website you can find the products related
              to Men and Women. This is the clone of Yoox.com website and placed
              across the globe.
            </h5>
            <div className=" toolbtndiv">
              <Link
                href="https://github.com/gprasadbhat948231/gshopy"
                isExternal
              >
                <button className="btn-sourcecode">View SourceCode</button>
              </Link>
              <Link
                href="https://gprasadbhat948231-makes-great-sites.netlify.app/"
                isExternal
              >
                <button className="btn-getdemo">Get Demo</button>
              </Link>
            </div>
          </div>
          <div className="proj-cont1">
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "10px",
                color: "#fff000"
              }}
            >
              Licious.in
            </h1>
            <img
              style={{
                width: "100%",
                height: "250px",
                margin: "auto",
                borderRadius: "10px"
              }}
              src="https://gprasadbhat948231.github.io/static/media/licious.a66259daeaafe568169f.png"
              alt="proj4"
            />
            <div className="proj-tools">
              <h2 className="tools-specs">HTML</h2>
              <h2 className="tools-specs">CSS</h2>
              <h2 className="tools-specs">JavaScript</h2>
              <h2 className="tools-specs">Netlify</h2>
            </div>
            <h4
              style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}
            >
              Summary:
            </h4>
            <h5 style={{ fontSize: "18px", marginTop: "10px" }}>
              This is the Restaurant based hotel management system. Where we can
              order the food online. Get it delivered by a day. It is
              established all over the country.
            </h5>
            <div className=" toolbtndiv">
              <Link
                href="https://github.com/gprasadbhat948231/licious.in-restaurant"
                isExternal
              >
                <button className="btn-sourcecode">View SourceCode</button>
              </Link>
              <Link href="https://elegant-torte-973965.netlify.app/" isExternal>
                <button className="btn-getdemo">Get Demo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
