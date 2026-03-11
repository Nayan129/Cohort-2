import { useState } from "react";
import { registerUser } from "./authApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);

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
        <h2 className="text-2xl mb-6">Register</h2>

        <input
          placeholder="username"
          className="w-full mb-4 p-2"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

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

        <button className="bg-red-500 px-4 py-2 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
