import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  uname: "",
  setUname: () => {},
});

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uname, setUname] = useState("");
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, uname, setUname }}
    >
      {children}
    </AuthContext.Provider>
  );
}
