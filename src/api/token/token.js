import { ENV } from "../../utils/constans";
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Token {
  async setToken(token) {
    try {
      await AsyncStorage.setItem(ENV.TOKEN, token);
    } catch (error) {
      console.log("Error saving the token", error);
    }
  }

  async getToken() {
    try {
      return await AsyncStorage.getItem(ENV.TOKEN);
    } catch (error) {
      console.log("Error getting the token", error);
    }
  }

  async removeToken() {
    try {
      await AsyncStorage.removeItem(ENV.TOKEN);
    } catch (error) {
      console.log("Error removing the token", error);
    }
  }

  async hasExpired(token) {
    try {
      const tokenDecode = jwtDecode(token);
      const expireDate = tokenDecode.exp * 1000;
      const currentDate = new Date().getTime();

      if (currentDate > expireDate) {
        return true;
      }

      return false;
    } catch (error) {
      console.log("Error checking token expiration", error);
      return false;
    }
  }
}
