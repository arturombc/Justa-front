import axios from "axios";

const BASE_URL = "http://localhost:5004/";

export const bdQuery1 = async () => {
  const { data } = await axios.get(BASE_URL + "bd-query1");
  return data;
};

export const bdQuery2 = async () => {
  const { data } = await axios.get(BASE_URL + "bd-query2");
  return data;
};

export const bdQuery3 = async () => {
  const { data } = await axios.get(BASE_URL + "bd-query3");
  return data;
};
