import { useState } from "react";
import { loginUser } from "./authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(form);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded w-[400px]"
      >
        <h2 className="text-2xl mb-6">Login</h2>

        <input
          placeholder="email"
          className="w-full mb-4 p-2"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="password"
          className="w-full mb-4 p-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-red-500 px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
