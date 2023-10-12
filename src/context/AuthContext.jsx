import { useState, useEffect, createContext } from "react";
import { Token } from "../api/token/token";
import { User } from "../api/user/fb.user";
import * as SecureStore from 'expo-secure-store';

const tokenCtrl = new Token();
const UserCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [User, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserInfoFromSecureStore = async () => {
    try {
      const storedUser = await SecureStore.getItemAsync("ui");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    (async () => {
      const token = await tokenCtrl.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  useEffect(() => {
    getUserInfoFromSecureStore();
  }, []);

  const login = async (token, uid) => {
    try {
      setLoading(true);
      await tokenCtrl.setToken(token);
      const response = await UserCtrl.getMe(uid);
      await SecureStore.setItemAsync("ui", JSON.stringify(response));
      const storedUser = await SecureStore.getItemAsync('ui');
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } catch (error) {
      // console.error(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    await tokenCtrl.removeToken();
    await SecureStore.deleteItemAsync("ui");
    setToken(null);
    setUser(null);
  };

  const updateUser = async (data) => {
    const newUserData = await UserCtrl.getMe(data.uid);
    setUser(newUserData);
  };

  const data = {
    accessToken: token,
    User,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
