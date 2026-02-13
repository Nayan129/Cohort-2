import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";
const Github = ({ setWindowState, windowName }) => {
  // console.log("githubData:", githubData);
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((project) => {
          return (
            <div className="card" key={project.id}>
              <div className="card-top">
                <img src={project.image} alt={project.title} />
                <h2>{project.title}</h2>
              </div>

              <div className="card-bottom">
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <button key={index}>{tag}</button>
                  ))}
                </div>

                <div className="card-links">
                  <a href={project.repolink} target="_blank" rel="noreferrer">
                    RepoLink
                    <i className="ri-github-fill"></i>
                  </a>

                  {project.demolink && (
                    <a href={project.demolink} target="_blank" rel="noreferrer">
                      DemoLink
                      <i className="ri-live-line"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
