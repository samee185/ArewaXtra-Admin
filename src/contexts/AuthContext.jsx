import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(localStorage.getItem("user"));
  }, []);
  const login = async (data) => {
    setLoading(true);
    axios
      .post(`${apiUrl}/auth/admin-login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setToken(res.data.data.token);
        setUser(res.data.data.user);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        navigate("/dashboard");
        toast.success("Login Successful")
      })
      .catch((err) => {
        err?.response
          ? toast.error(err.response.data.message)
          : toast.error("An error occured");
          console.log(err.response?.data?.message);
          
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const logout = async () => {
    try {
      const token = localStorage.getItem("token") || null;
  
      if (!token) {
        throw new Error("No token available for logout");
      }
  
      await axios.post(`${apiUrl}/auth/logout`, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      });
  
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      
    }
  };
  
  const values = {
    loading,
    token,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
