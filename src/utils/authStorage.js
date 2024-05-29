import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const token = await AsyncStorage.getItem(`${this.namespace}:token`);
      return token;
    } catch (e) {
      console.error('Failed to fetch the token from storage:', e);
      return null;
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
    } catch (e) {
      console.error('Failed to save the token to storage:', e);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:token`);
    } catch (e) {
      console.error('Failed to remove the token from storage:', e);
    }
  }
}

export default AuthStorage;