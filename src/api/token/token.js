import { ENV } from "../../utils/constans";
import jwtDecode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

export class Token {
  async setToken(token) {
    await SecureStore.setItemAsync(ENV.TOKEN, token);
  }

  async getToken() {
    return await SecureStore.getItemAsync(ENV.TOKEN);
  }

  async removeToken() {
    await SecureStore.deleteItemAsync(ENV.TOKEN);
  }

  hasExpired(token) {
    const tokenDecode = jwtDecode(token);
    const expireDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();

    if (currentDate > expireDate) {
      return true;
    }

    return false;
  }
}
