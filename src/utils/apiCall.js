import axios from "axios";

export async function callStore(url) {
    const res = await axios.get(url);
    const data = await res.data.data;
    return data;
  }