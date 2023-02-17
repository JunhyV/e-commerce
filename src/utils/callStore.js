import axios from "axios";

export async function callStore(url) {
  try {
    const res = await axios.get(url);
    const data = await res.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
