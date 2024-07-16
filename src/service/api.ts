import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://obi.victornwadinobi.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchPrograms = async () => {
  const response = await axiosInstance.get("/programs"); 
  return response.data;
};

export const apply = async (data) => {
  const response = await axiosInstance.post(`/programs/$`, data);
  return response.data;
};
