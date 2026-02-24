import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    await handleRegister(username, email, password);
    navigate("/");
  }
  if (loading) {
    return (
      <main>
        <h1>Loading.....</h1>
      </main>
    );
  }

  // registration code starts from here
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="enter username"
          />
          <input
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
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
