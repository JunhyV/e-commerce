import axios from "axios";

export async function callAuth(url, username, email, password) {
    try {
      const res = await axios.post(url, {
        displayName: username,
        email: email,
        password: password
      })
      console.log(res);
    } catch (error) {
      const message = error.response.data.message
      console.log(message);
    }
  }
