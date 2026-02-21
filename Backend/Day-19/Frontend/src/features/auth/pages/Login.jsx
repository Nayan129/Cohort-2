import "../styles/form.scss";
import { Link } from "react-router";

const Login = () => {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter username"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="enter password"
          />
          <button className="button primary-btn">Login</button>
        </form>
        <p>
          Don't have an account ? <Link to={"/register"}>create account</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
