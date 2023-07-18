import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (key, accessToken) => {
  try {
    await AsyncStorage.setItem(key, accessToken);
  } catch (error) {
    console.log('Error setting token:', error);
  }
};

export const checkToken = async (key) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token !== null;
  } catch (error) {
    console.log('Error checking token:', error);
    return false;
  }
};





