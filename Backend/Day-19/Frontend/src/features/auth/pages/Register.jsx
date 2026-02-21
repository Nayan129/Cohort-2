import "../styles/form.scss";
import { Link } from "react-router";

const Register = () => {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter username"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="enter password"
          />
          <button className="button primary-btn">Register</button>
        </form>
        <p>
          already have an account ! <Link to={"/login"}>Login now</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
