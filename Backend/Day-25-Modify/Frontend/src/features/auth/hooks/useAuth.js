import { login, register, getMe, logout } from "../services/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  /* we import AuthContext and useContext to get data and use it in app anywhere  || it is state layer handling*/
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  /* function to handle function we created in api layer */
  async function handleRegister({ username, email, password }) {
    setLoading(true);
    const data = await register({ username, email, password });
    setUser(data.user);
    setLoading(false);
  }

  async function handleLogin({ username, email, password }) {
    setLoading(true);
    const data = await login({ username, password, email });
    setUser(data.user);
    setLoading(false);
  }

  async function handleGetMe() {
    try {
      setLoading(true);

      const data = await getMe();
      setUser(data.user);
    } catch (error) {
      if (error.response.status === 401) {
        setUser(null);
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    const data = await logout();
    setUser(null);
    setLoading(false);
  }

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout,
  };
};
