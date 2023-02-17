import axios from "axios";

export async function callLogin(email, password) {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password
      })
      const data = await res.data
      return {...data};

    } catch (error) {
      return error;
    }
  }