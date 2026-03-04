import { Link } from "react-router-dom";
import "../styles/register.scss";
import FormGroup from "../components/FormGroup";
const Register = () => {
  return (
    <main className="register-page">
      <div className="register-container">
        <h1>register</h1>
        <form>
          <FormGroup label="Email" placeHolder="Enter your email" />
          <FormGroup label="username" placeHolder="Enter username" />
          <FormGroup label="password" placeHolder="Enter your password" />
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
