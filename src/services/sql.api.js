import axios from "axios";

const BASE_URL = "http://localhost:5004/sql";

export const sqlQuery = async (query) => {
  const data = await axios.post(BASE_URL, { query });
  //   console.log(data);
  return data;
};
