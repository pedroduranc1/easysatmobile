import { useState, useEffect, createContext } from "react";
import { Token } from "../api/token/token";
import { User } from "../api/user/fb.user";

const tokenCtrl = new Token();
const UserCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [token, setToken] = useState(null);


  const data = {
    token,
    setToken
  };

  // if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
