import { useState, createContext, useEffect } from "react";
import { users } from "../Data/user.js";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setCurrentUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  function login(username, password) {
    setIsLoading(true);
    setLoginError("");

    return new Promise((resolve) => {
      setTimeout(() => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          const fakeToken = Date.now().toString();
          setCurrentUser(user);
          setToken(fakeToken);
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("token", fakeToken);
          setIsLoading(false);
          resolve(true);
        } else {
          setLoginError("Username or password is incorrect");
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    setLoginError("");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  }

  const value = {
    currentUser,
    token,
    login,
    logout,
    loginError,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
