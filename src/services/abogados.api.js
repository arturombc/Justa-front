import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/abogados/";

export const postAbogados = async (abogado) => {
  const { data } = await axios.post(BASE_URL, abogado);
  return data;
};

export const getAbogados = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const deleteAbogados = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}${id}`);
  return data;
};
