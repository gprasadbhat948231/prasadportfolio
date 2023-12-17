import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import { Box } from "@chakra-ui/react";

function Github() {
  const techs = [
    {
      id: 1,
      src: "https://img.freepik.com/free-icon/html_318-155621.jpg?w=2000",
      title: "HTML"
    },
    {
      id: 2,
      src: "https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667",
      title: "CSS"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/computer-know-how/image/upload/c_fill,g_auto,w_848,h_544,dpr_2/f_auto,q_auto/v1586880081/JavaScript-logo.png?_i=AA",
      title: "JavaScript"
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      title: "React"
    },
    {
      id: 5,
      src: "https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png",
      title: "Chakra-UI",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVh6KVb6OIgcgOdrweNcVYdt-vvoGp5W5PQA&usqp=CAU",
      title: "Tailwind Css"
    },
    {
      id: 7,
      src: "https://mui.com/static/logo.png",
      title: "Material UI"
    },
    {
      id: 8,
      src: "https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg",
      title: "Redux"
    }
  ];

  const tools = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      title: "VS Code"
    },
    {
      id: 2,
      src: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      title: "Postman"
    },
    {
      id: 3,
      src: "https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg",
      title: "Netlify"
    },
    {
      id: 4,
      src: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      title: "Vercel"
    }
  ];

  return (
    <div id="github">
      <div className="d-flex flex-column mt-5">
        <span className="about-me-text">Skills</span>
        <span className="why-text-sub">My skills details</span>
      </div>

      <h1 className="programingskills-heading">Programing Skills</h1>
      <div className="skills-grid">
        {techs.map(({ id, src, title }) => (
          <div key={id} className={"skills-tag"}>
            <img
              style={{ width: "120px", height: "120px" }}
              src={src}
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>

      <h1 className="programingskills-heading">Tools Used</h1>
      <div className="skills-grid">
        {tools.map(({ id, src, title }) => (
          <div key={id} className={"skills-tag"}>
            <img
              style={{ width: "120px", height: "120px" }}
              src={src}
              alt=""
              className="w-20 mx-auto"
            />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>

      <h1 className="programingskills-heading">Github Status</h1>
      <Box className="git-calen">
        <GitHubCalendar
          style={{ margin: "auto" }}
          fontSize={20}
          username="gprasadbhat948231"
        />
      </Box>

      <div className="git-status">
        <img
          src="https://github-readme-stats.vercel.app/api/?username=gprasadbhat948231&show_icons=true&hide_border=true&include_all_commits=true"
          alt="github stats"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=gprasadbhat948231&hide_border=true"
          alt="github stats"
        />
      </div>
    </div>
  );
}

export default Github;
