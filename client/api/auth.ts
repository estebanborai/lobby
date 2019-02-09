import axios from 'axios';

const URI = API_URL.concat('/auth');

export const signIn = async credentials => {
  try {
    const response = await axios.post(URI.concat('/signin'), null, {
      auth: {
        username: credentials.username,
        password: credentials.password
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const signUp = async user => {
  try {
    const response = await axios.post(URI.concat('/signup'), user);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const me = async () => {
  try {
    const response = await axios.get(URI.concat('/me'));
    return response.data;
  } catch (error) {
    throw error;
  }
}