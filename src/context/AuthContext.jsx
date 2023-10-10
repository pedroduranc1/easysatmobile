import { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Token } from "../api/token/token";
import { User } from "../api/user/fb.user";

const tokenCtrl = new Token();
const UserCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [User, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

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
    (async () => {
      const storedUser = JSON.parse(await AsyncStorage.getItem("ui"));
      if (storedUser) {
        setUser(storedUser);
        setLoading(false);
      }
    })();
  }, []);

  const login = async (token, uid) => {
    try {
      setLoading(true);
      await tokenCtrl.setToken(token);
      const response = await UserCtrl.getMe(uid);
      await AsyncStorage.setItem("ui", JSON.stringify(response));
      const data = JSON.parse(await AsyncStorage.getItem("ui"));
      setUser(data);
      setLoading(false);
    } catch (error) {
      // console.error(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    await tokenCtrl.removeToken();
    await AsyncStorage.removeItem("ui");
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
