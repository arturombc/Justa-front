import axios from "axios";

const BASE_URL = "http://localhost:5004/";

export const getPersonas = async () => {
  const { data } = await axios.get(BASE_URL + "personas");
  return data;
};

export const postPersonas = async (data) => {
  const response = await axios.post(BASE_URL + "personas", data);
  return response;
};

export const putPersonas = async () => {};
