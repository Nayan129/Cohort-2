import { Link } from "react-router-dom";
import "../styles/register.scss";
import FormGroup from "../components/FormGroup";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({ email, username, password });
    navigate("/");
  }

  return (
    <main className="register-page">
      <div className="register-container">
        <h1>register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeHolder="Enter your email"
          />
          <FormGroup
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="username"
            placeHolder="Enter username"
          />
          <FormGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            placeHolder="Enter your password"
          />
          <button className="btn">register</button>
        </form>
        <p>
          already have an account ! <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
