import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/feed_back/";

export const get_nombres = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
