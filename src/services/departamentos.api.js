import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/departamentos/";

export const createDepartmentos = async (department) => {
  const { data } = await axios.post(BASE_URL, department);
  return data;
};

export const getDepartamentos = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const deleteDepartamentos = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}/${id}/delete`);
  return data;
};
