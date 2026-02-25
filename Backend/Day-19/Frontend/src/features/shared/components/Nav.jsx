import { useNavigate } from "react-router";
import "../nav.scss";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h2 className="nav-homebtn" onClick={() => navigate("/")}>
        Instagram
      </h2>
      <button
        onClick={() => navigate("/create-post")}
        className="createBtn primary-btn"
      >
        Create Post
      </button>
    </div>
  );
};

export default Nav;
