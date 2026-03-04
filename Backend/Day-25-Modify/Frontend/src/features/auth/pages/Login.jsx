import "../styles/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <FormGroup label="Email" placeHolder="Enter your email" />
          <FormGroup label="password" placeHolder="Enter your password" />
          <button className="btn">Login</button>
        </form>
        <p>
          don't have an account ? <Link to="/register">Register now</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
